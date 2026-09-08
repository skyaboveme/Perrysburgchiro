/**
 * Precision Spinal Care — Interactive 3D Spine Background
 * Three.js scene with custom GLSL shaders, mouse interaction, and scroll reactivity.
 */

import * as THREE from 'three';

// ─── GLSL Shaders ───────────────────────────────────────────────────
const vertexShader = `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uMouseRadius;
  uniform float uPixelRatio;

  attribute float aScale;
  attribute float aPhase;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Organic wave motion along the spine
    float wave = sin(uTime * 0.4 + pos.y * 1.8 + aPhase) * 0.15;
    float wave2 = cos(uTime * 0.3 + pos.y * 1.2 + aPhase * 0.7) * 0.1;
    pos.x += wave;
    pos.z += wave2;

    // Scroll-driven rotation
    float scrollAngle = uScroll * 0.4;
    float cosA = cos(scrollAngle);
    float sinA = sin(scrollAngle);
    vec3 rotated = vec3(
      pos.x * cosA - pos.z * sinA,
      pos.y,
      pos.x * sinA + pos.z * cosA
    );

    // Mouse repulsion
    vec4 mvPos = modelViewMatrix * vec4(rotated, 1.0);
    vec4 projected = projectionMatrix * mvPos;
    vec2 screenPos = projected.xy / projected.w;
    vec2 mouseDir = screenPos - uMouse;
    float mouseDist = length(mouseDir);
    float repulsion = smoothstep(uMouseRadius, 0.0, mouseDist) * 0.3;
    mvPos.xy += normalize(mouseDir + 0.001) * repulsion;

    // Depth-based alpha
    float depth = -mvPos.z;
    vAlpha = smoothstep(12.0, 2.0, depth) * (0.5 + 0.5 * sin(uTime * 0.5 + aPhase));
    vAlpha = clamp(vAlpha, 0.1, 1.0);

    vColor = aColor;

    gl_Position = projectionMatrix * mvPos;
    gl_PointSize = aScale * uPixelRatio * (180.0 / depth);
    gl_PointSize = clamp(gl_PointSize, 1.0, 12.0);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft circular point with glow
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float glow = exp(-dist * 6.0);
    float core = smoothstep(0.5, 0.1, dist);
    float alpha = (core * 0.8 + glow * 0.4) * vAlpha;

    gl_FragColor = vec4(vColor, alpha);
  }
`;

// ─── Scene Setup ────────────────────────────────────────────────────
export function initSpineScene(canvas: HTMLCanvasElement) {
  // Check for reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;

  // ─── Generate Spine Particles ───────────────────────────────────
  const PARTICLE_COUNT = 2200;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const scales = new Float32Array(PARTICLE_COUNT);
  const phases = new Float32Array(PARTICLE_COUNT);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  const tealColor = new THREE.Color('#06d6a0');
  const iceColor = new THREE.Color('#7dd3fc');
  const goldColor = new THREE.Color('#f4b942');

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    const t = (i / PARTICLE_COUNT) * Math.PI * 8; // Spiral parameter
    const yPos = (i / PARTICLE_COUNT) * 10 - 5; // Spread along Y axis

    // Double helix vertebral shape
    const helixRadius = 0.6 + Math.sin(yPos * 0.8) * 0.2;
    const strand = i % 2 === 0 ? 1 : -1;

    // Main spine structure with some scatter
    const scatter = Math.random() * 0.8;
    if (i < PARTICLE_COUNT * 0.6) {
      // Core spine particles
      positions[i3] = Math.cos(t * strand) * helixRadius + (Math.random() - 0.5) * 0.3;
      positions[i3 + 1] = yPos;
      positions[i3 + 2] = Math.sin(t * strand) * helixRadius + (Math.random() - 0.5) * 0.3;
    } else if (i < PARTICLE_COUNT * 0.85) {
      // Connecting tissue particles (between strands)
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 1.2;
      positions[i3] = Math.cos(angle) * r;
      positions[i3 + 1] = yPos;
      positions[i3 + 2] = Math.sin(angle) * r;
    } else {
      // Ambient floating particles (nerve endings)
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;
    }

    scales[i] = Math.random() * 2.5 + 0.5;
    phases[i] = Math.random() * Math.PI * 2;

    // Color: mostly teal, some ice-blue, rare gold
    const colorRng = Math.random();
    let c: THREE.Color;
    if (colorRng < 0.6) c = tealColor;
    else if (colorRng < 0.85) c = iceColor;
    else c = goldColor;

    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uMouseRadius: { value: 0.3 },
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ─── Interaction ──────────────────────────────────────────────────
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  function onMouseMove(e: MouseEvent) {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  }
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  function onScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    uniforms.uScroll.value = scrollY / maxScroll;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── Resize ───────────────────────────────────────────────────────
  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
  }
  window.addEventListener('resize', onResize, { passive: true });

  // ─── Animation Loop ───────────────────────────────────────────────
  let animationId: number;
  const clock = new THREE.Clock();

  function animate() {
    animationId = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    uniforms.uTime.value = elapsed;

    // Smooth mouse follow
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;
    uniforms.uMouse.value.set(mouse.x, mouse.y);

    // Gentle auto-rotation
    points.rotation.y = elapsed * 0.05 + uniforms.uScroll.value * Math.PI;

    renderer.render(scene, camera);
  }

  if (!prefersReduced) {
    animate();
  } else {
    // For reduced motion: render a single static frame
    uniforms.uTime.value = 2;
    renderer.render(scene, camera);
  }

  // Cleanup function
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
