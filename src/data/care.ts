/**
 * Chiropractic Care pages. Copy is written for this site.
 * Photo files are existing clinic photos in public/gallery.
 */

export interface CarePhoto {
  src: string;
  alt: string;
}

export interface CarePage {
  slug: string;
  title: string;
  menuLabel: string;
  description: string;
  lede: string;
  paragraphs: string[];
  points: { title: string; text: string }[];
  photos: CarePhoto[];
}

const photo = (file: string, alt: string): CarePhoto => ({
  src: `/gallery/${file}`,
  alt,
});

export const carePages: CarePage[] = [
  {
    slug: 'structural-chiropractic-vs-traditional-chiropractic',
    title: 'Structural Chiropractic vs. Traditional Chiropractic',
    menuLabel: 'Structural vs. Traditional',
    description:
      'How structural corrective care at Precision Spinal Care differs from a traditional adjustment. Perrysburg, Ohio.',
    lede: 'A traditional visit often chases the sore spot. We measure the spine and correct what is out of place.',
    paragraphs: [
      'A traditional adjustment can ease a spasm and get you through the afternoon. That relief is real, and it is often temporary, because the shift underneath it is still there.',
      'Structural corrective care starts with imaging and objective findings. Dr. Taylor uses those measurements to plan a gentle correction — no twisting the neck for a crack, and no guessing which joint to move.',
      'The aim is a spine that holds. Your nervous system should not have to negotiate the same misalignment every week.',
    ],
    points: [
      { title: 'Symptom care', text: 'Calm pain and spasm for the visit in front of you.' },
      { title: 'Structural care', text: 'Correct the shift that keeps bringing the pain back.' },
      { title: 'How we work', text: 'CBCT imaging, a specific plan, and progress you can see.' },
    ],
    photos: [
      photo('IMG_5245.jpg', 'Dr. Taylor reviewing a spinal scan with a patient'),
    ],
  },
  {
    slug: 'upper-cervical-chiropractic',
    title: 'Upper Cervical Chiropractic',
    menuLabel: 'Upper Cervical Chiropractic',
    description:
      'Precise, low-force upper cervical correction for the atlas and axis, guided by 3D imaging in Perrysburg.',
    lede: 'The upper neck is where the head sits on the spine. A small shift there can irritate the nerves that serve the head, balance, and the rest of the body.',
    paragraphs: [
      'We use 3D imaging to see the atlas and axis clearly, then deliver a correction calculated for your anatomy. There is no twisting, cracking, or popping of the neck.',
      'People come to this part of the practice for migraines, vertigo, neck pain, and other problems that have not settled with a general adjustment.',
      'The visit is specific. We adjust when the imaging and the exam say the joint is out, and we leave it alone when it is holding.',
    ],
    points: [
      { title: 'Atlas and axis', text: 'Care focused on the top of the neck, not a full-spine routine.' },
      { title: 'Low force', text: 'A precise correction without twisting the neck.' },
      { title: 'Measured', text: '3D imaging decides the line of drive before hands do.' },
    ],
    photos: [
      photo('IMG_5353.jpg', 'Dr. Taylor reviewing an upper cervical scan'),
    ],
  },
  {
    slug: 'headaches-migraines',
    title: 'Headaches and Migraines',
    menuLabel: 'Headaches and Migraines',
    description:
      'Structural care for recurring headaches and migraines at Precision Spinal Care in Perrysburg, Ohio.',
    lede: 'A headache that keeps returning is often a structural problem, not a shortage of pain relievers.',
    paragraphs: [
      'Misalignment in the upper cervical spine can irritate the nerves and the circulation that feed the head. Medication can quiet an episode. It does not put the joint back.',
      'We look at that region with CBCT, then correct the shift that is driving the pattern. The visit is gentle. We are not trying to crack the neck into a temporary calm.',
      'If light, noise, or a one-sided throb is running your week, start with a measured look at the neck.',
    ],
    points: [
      { title: 'Upper neck', text: 'Where many recurring headaches actually begin.' },
      { title: 'Imaging first', text: 'We see the joint before we correct it.' },
      { title: 'A plan', text: 'Correction aimed at the pattern, not the afternoon.' },
    ],
    photos: [
      photo('IMG_5327.jpg', 'Cervical imaging on the clinic monitor'),
    ],
  },
  {
    slug: 'back-pain',
    title: 'Back Pain',
    menuLabel: 'Back Pain',
    description: 'Structural corrective care for acute and chronic back pain in Perrysburg, Ohio.',
    lede: 'Almost everyone will have back pain. The useful question is whether it is a tight muscle for a day, or a structural problem that has learned to stay.',
    paragraphs: [
      'We examine how the spine is stacked, not only where it hurts. Correcting that alignment takes pressure off joints, discs, and the nerves that serve the low back.',
      'You should be able to walk, work, and sleep without planning the day around your back. That is the standard we measure against.',
      'Care is precise and gentle. We are not forcing the spine through a crack and sending you home to see what happens.',
    ],
    points: [
      { title: 'Find the shift', text: 'Pain location and structural cause are not always the same spot.' },
      { title: 'Correct it', text: 'A specific adjustment based on the exam, not a routine twist.' },
      { title: 'Check it', text: 'Follow-up tells us whether the correction held.' },
    ],
    photos: [
      photo('IMG_5198.jpg', 'Chiropractic adjustment at Precision Spinal Care'),
      photo('IMG_5202.jpg', 'Hands-on spinal care in the Perrysburg office'),
      photo('IMG_5251.jpg', 'Reviewing posture findings related to back pain'),
    ],
  },
  {
    slug: 'neck-pain',
    title: 'Neck Pain',
    menuLabel: 'Neck Pain',
    description: 'Precise structural care for neck pain at Precision Spinal Care in Perrysburg.',
    lede: 'Neck pain makes ordinary motion expensive — checking a lane, looking down at a desk, reaching overhead.',
    paragraphs: [
      'Left alone, the muscles weaken around a joint that is not sitting where it should. Headaches and arm symptoms often follow.',
      'We find the structural cause with imaging and a hands-on exam, then correct it with a precise adjustment. The goal is a neck that moves cleanly, not a neck that has been cracked until it is quiet for an hour.',
    ],
    points: [
      { title: 'Motion', text: 'Turning, looking down, and reaching should not be a negotiation.' },
      { title: 'The joint', text: 'We correct position, then let the muscles settle around it.' },
      { title: 'No twisting', text: 'Upper cervical work here does not crack the neck.' },
    ],
    photos: [
      photo('IMG_5342.jpg', 'Dr. Taylor reviewing cervical imaging used to plan neck care'),
    ],
  },
  {
    slug: 'sciatica',
    title: 'Sciatica',
    menuLabel: 'Sciatica',
    description: 'Structural chiropractic care for sciatica and radiating leg pain in Perrysburg, Ohio.',
    lede: 'Sciatica is pain that leaves the back and travels through the buttock, down the leg, sometimes into the foot.',
    paragraphs: [
      'It is a nerve under pressure, and it gets worse when the structure irritating it is ignored. Waiting and medicating the leg does not move the joint that is loading the nerve.',
      'We look for the spinal shift, then correct that position. Extremity findings — the foot, the gait, the way you stand — are part of the same exam.',
    ],
    points: [
      { title: 'The path', text: 'Back, buttock, leg, and foot are one nerve story.' },
      { title: 'The cause', text: 'We treat the mechanical pressure, not only the burning.' },
      { title: 'Daily life', text: 'Walking, sitting, and sleep are the outcomes that matter.' },
    ],
    photos: [
      photo('IMG_5198.jpg', 'Dr. Taylor performing a back adjustment'),
    ],
  },
  {
    slug: 'scoliosis',
    title: 'Scoliosis',
    menuLabel: 'Scoliosis',
    description: 'Structural assessment and chiropractic care for scoliosis at Precision Spinal Care in Perrysburg.',
    lede: 'Scoliosis is a sideways curve that often starts small and adds up over years.',
    paragraphs: [
      'A curve of more than about ten degrees, viewed from behind, is the usual threshold for the name. The earlier it is measured, the more adaptable the spine still is.',
      'Structural care supports the spine while that window is open, so the curve has less reason to progress. We measure. We explain what we are seeing before we treat. We do not guess a curve from posture alone.',
    ],
    points: [
      { title: 'Measure', text: 'Posture and imaging, not a glance across the room.' },
      { title: 'Early', text: 'A small curve is easier to influence than a rigid one.' },
      { title: 'Honest scope', text: 'We will tell you when a curve needs more than chiropractic care.' },
    ],
    photos: [
      photo('IMG_5255.jpg', 'Posture scan used in a scoliosis consult'),
      photo('IMG_5258.jpg', 'Reviewing spinal alignment on screen'),
      photo('IMG_5262.jpg', 'Structural posture findings at the clinic'),
      photo('IMG_5272.jpg', 'Discussing alignment during a corrective visit'),
    ],
  },
  {
    slug: 'vertigo',
    title: 'Vertigo',
    menuLabel: 'Vertigo',
    description: 'Upper cervical structural care for vertigo and dizziness in Perrysburg, Ohio.',
    lede: 'Vertigo turns ordinary rooms into moving ones. Standing, driving, and rolling over in bed can all become projects.',
    paragraphs: [
      'A shift in the upper cervical spine can disturb the signals the brain uses for balance. We image that region, then make a gentle, specific correction.',
      'Dizziness also has causes that are not spinal. If the exam says you need a medical workup, we will say so rather than adjust through it.',
    ],
    points: [
      { title: 'Balance signals', text: 'The top of the neck talks to the systems that keep you upright.' },
      { title: 'Gentle correction', text: 'No twisting a dizzy patient for a crack.' },
      { title: 'Clear limits', text: 'We refer when the spine is not the source.' },
    ],
    photos: [
      photo('IMG_5076.jpg', 'Quiet consult before an upper cervical correction'),
      photo('IMG_5086.jpg', 'Patient visit focused on head and neck complaints'),
      photo('IMG_5385.jpg', 'Seated consultation at Precision Spinal Care'),
    ],
  },
  {
    slug: '3d-cbct-imaging',
    title: '3D CBCT Imaging',
    menuLabel: '3D CBCT Imaging',
    description:
      'In-house cone beam CT of the cervical spine at Precision Spinal Care, used to plan a precise atlas correction.',
    lede: 'Cone beam CT shows each joint in the neck in three dimensions. A flat X-ray cannot do that.',
    paragraphs: [
      'This imaging is how an atlas correction gets calculated for your anatomy, and how we see the structure of the cervical spine before we adjust it.',
      'You see what we see. The plan comes from the scan, not from a habit of the hands. It is also how we check that a correction changed the structure, not only the way you feel that day.',
    ],
    points: [
      { title: 'In house', text: 'The scan happens in this office, as part of your workup.' },
      { title: 'Each joint', text: 'The neck is viewed as separate joints, not one shadow.' },
      { title: 'A specific adjustment', text: 'The line of correction follows the image.' },
    ],
    photos: [
      photo('IMG_5280.jpg', 'CBCT imaging suite at Precision Spinal Care'),
      photo('IMG_5295.jpg', 'Cone beam CT scanner in the Perrysburg office'),
      photo('IMG_5318.jpg', '3D imaging room used for cervical scans'),
    ],
  },
  {
    slug: 'neuropathy',
    title: 'Neuropathy',
    menuLabel: 'Neuropathy',
    description:
      'Low-level light therapy and structural care for burning, tingling, and numbness at Precision Spinal Care.',
    lede: 'Burning, tingling, numbness, or a loss of balance in the hands or feet is a nerve problem. Medication can turn the volume down. It does not restore the tissue.',
    paragraphs: [
      'Alongside structural correction, we use low-level light therapy. Infrared wavelengths are aimed at circulation and inflammation in the affected area.',
      'It is non-invasive, and it is aimed at the nerve, not at hiding the sensation. We still look upstream: a nerve complaint in the foot or hand can start where that nerve exits the spine.',
    ],
    points: [
      { title: 'Light therapy', text: 'Infrared applied to the area that is burning or numb.' },
      { title: 'Circulation', text: 'The goal is blood flow and calmer tissue, not a stronger pill.' },
      { title: 'The spine too', text: 'We check the structural source, not only the foot or hand.' },
    ],
    photos: [
      photo('IMG_5395.jpg', 'Dr. Taylor examining a patient’s foot'),
      photo('IMG_5403.jpg', 'Foot and ankle exam at Precision Spinal Care'),
      photo('IMG_5477.jpg', 'Red light therapy for the feet at Precision Spinal Care'),
      photo('IMG_5480.jpg', 'Light therapy session for nerve symptoms in the feet'),
    ],
  },
  {
    slug: 'disc-injury',
    title: 'Disc Injury',
    menuLabel: 'Disc Injury',
    description: 'Structural chiropractic care for disc injuries and disc-related back pain in Perrysburg.',
    lede: 'A disc injury — bulge, herniation, or the pain people call a slipped disc — deserves a prompt look.',
    paragraphs: [
      'Waiting while the disc stays irritated is how a manageable problem becomes a longer one. Pain can be mild or severe. Either way, the mechanical load should change.',
      'Care here is structural. We reduce the stress on the disc with a precise correction and a plan you can follow, rather than forcing the spine through a general crack.',
      'If imaging or a surgical opinion is the right next step, we will tell you.',
    ],
    points: [
      { title: 'Do not wait it out', text: 'An irritated disc rarely organizes itself.' },
      { title: 'Unload it', text: 'Correction aimed at the mechanical stress on the disc.' },
      { title: 'Know the limit', text: 'We refer when the disc needs another kind of care.' },
    ],
    photos: [
      photo('IMG_5276.jpg', 'Dr. Taylor reviewing spinal findings during a disc consult'),
      photo('IMG_5093.jpg', 'Therapy visit for spinal pain'),
    ],
  },
  {
    slug: 'whiplash',
    title: 'Whiplash',
    menuLabel: 'Whiplash',
    description: 'Chiropractic care for whiplash and auto-injury neck trauma in Perrysburg, Ohio.',
    lede: 'Whiplash is the head and neck whipped forward and back. Most often it is a rear-end crash. Falls and other trauma do it too.',
    paragraphs: [
      'Symptoms often show up days or weeks later, after the adrenaline is gone. A stiff neck becomes a headache, a jaw complaint, or an ache that will not leave.',
      'We examine what shifted, image when it changes the plan, and correct the structure. Early care is how an injury stays an injury instead of becoming the way your neck works.',
    ],
    points: [
      { title: 'Delayed pain', text: 'Feeling fine in the parking lot does not close the case.' },
      { title: 'The joints', text: 'We look for what moved, not only what is sore.' },
      { title: 'A record', text: 'Objective findings matter if an auto claim is part of the story.' },
    ],
    photos: [
      photo('IMG_5334.jpg', 'Dr. Taylor reviewing a 3D cervical scan'),
    ],
  },
  {
    slug: 'work-injury',
    title: 'Work Injury',
    menuLabel: 'Work Injury',
    description: 'Chiropractic care for repetitive and overuse work injuries in Perrysburg, Ohio.',
    lede: 'Most work injuries we see are not dramatic accidents. They are the same lift, the same reach, the same desk, repeated until a joint or a nerve gives out.',
    paragraphs: [
      'Chiropractic care addresses that pattern: the spinal and extremity stress, the posture that keeps reloading it, and a plan that lets you stay at the job while it heals.',
      'Do not wait until the only remaining options are time off or a procedure. The earlier the mechanical problem is corrected, the less of your work it takes with it.',
    ],
    points: [
      { title: 'Repetition', text: 'The usual injury is overuse, not a single accident.' },
      { title: 'Stay working', text: 'The plan is built around the job you still have to do.' },
      { title: 'Posture', text: 'We change the position that keeps reloading the joint.' },
    ],
    photos: [
      photo('IMG_5131.jpg', 'Therapy for an overuse injury at the clinic'),
      photo('IMG_5133.jpg', 'Treatment visit for a work-related complaint'),
      photo('IMG_5146.jpg', 'Hands-on recovery care in Perrysburg'),
    ],
  },
  {
    slug: 'arm-leg-pain',
    title: 'Arm and Leg Pain',
    menuLabel: 'Arm and Leg Pain',
    description: 'Chiropractic evaluation of arm and leg pain, including nerve referral from the spine, in Perrysburg.',
    lede: 'Arm and leg pain is not always an arm or a leg problem. The shoulder and hip are mobile, and they are also where nerves leave a spine that may be out of position.',
    paragraphs: [
      'We sort out whether the pain is a local injury, a nerve referral, or both. Sports, overuse, and a structural shift can all land in the same limb.',
      'Treatment follows the finding: structural correction where the spine is involved, and attention to the joint itself when that is the source.',
    ],
    points: [
      { title: 'Local or referred', text: 'The place that hurts is not always the place that is injured.' },
      { title: 'Shoulder and hip', text: 'High-mileage joints that we examine on purpose.' },
      { title: 'A full path', text: 'Spine, nerve, and extremity are one exam.' },
    ],
    photos: [
      photo('IMG_5403.jpg', 'Extremity exam for limb pain'),
      photo('IMG_5417.jpg', 'Assessing a joint during a clinic visit'),
      photo('IMG_5151.jpg', 'Therapy visit for an arm or leg complaint'),
    ],
  },
  {
    slug: 'carpal-tunnel',
    title: 'Carpal Tunnel',
    menuLabel: 'Carpal Tunnel',
    description: 'Conservative chiropractic care for carpal tunnel symptoms in Perrysburg, Ohio.',
    lede: 'Carpal tunnel is pressure on the median nerve at the wrist. Swelling, repetition, and sometimes a problem further up the nerve’s path all play a part.',
    paragraphs: [
      'Surgery and a long course of medication are not the only options. We evaluate the wrist and the spine that feeds it.',
      'The plan is conservative: precise, gentle, and aimed at the compression rather than at masking the tingling. If the wrist needs a surgical opinion, we will not talk you out of it.',
    ],
    points: [
      { title: 'The wrist', text: 'Where the median nerve is actually crowded.' },
      { title: 'Upstream', text: 'The neck can contribute to hand symptoms. We check it.' },
      { title: 'Conservative first', text: 'A non-surgical plan when the exam supports it.' },
    ],
    photos: [
      photo('IMG_5272.jpg', 'General consultation at Precision Spinal Care'),
    ],
  },
  {
    slug: 'shoulder-pain',
    title: 'Shoulder Pain',
    menuLabel: 'Shoulder Pain',
    description: 'Structural and extremity care for shoulder pain at Precision Spinal Care in Perrysburg.',
    lede: 'The shoulder is the most mobile joint you have, which is why lifting, reaching, and sleeping on one side eventually complain.',
    paragraphs: [
      'An ignored shoulder problem settles in. We identify whether the pain is the joint, the rotator cuff, or a neck that is referring pain into the arm.',
      'Treatment follows that finding. Structural correction when the spine is involved, and a plan that restores motion you can actually use.',
    ],
    points: [
      { title: 'Name the source', text: 'Joint, cuff, or neck referral — they are not the same treatment.' },
      { title: 'Motion you use', text: 'Reaching and lifting are the test, not a number on a chart.' },
      { title: 'Do not wait', text: 'A shoulder that is protected for months gets harder to restore.' },
    ],
    photos: [
      photo('IMG_5276.jpg', 'General consultation with Dr. Taylor'),
    ],
  },
  {
    slug: 'chiropractic-care-for-kids',
    title: 'Chiropractic Care for Kids',
    menuLabel: 'Chiropractic Care for Kids',
    description: 'Gentle structural chiropractic care for children at Precision Spinal Care in Perrysburg.',
    lede: 'A child’s nervous system is still wiring itself. Stress on the spine — from birth, falls, posture, or a growth spurt — can show up as more than a sore back.',
    paragraphs: [
      'It can show up in comfort, behavior, and how the body regulates. Children rarely describe it the way an adult would. They adapt, and the adaptation becomes posture.',
      'Care for children here is gentle and specific. We are not cracking a small spine. We are correcting a shift early, before it becomes the posture they grow into.',
    ],
    points: [
      { title: 'Gentle', text: 'Force matches a child. The technique is specific, not a mini adult adjustment.' },
      { title: 'Early', text: 'A shift corrected now is a shift they do not grow around.' },
      { title: 'The whole child', text: 'We listen for regulation and comfort, not only pain.' },
    ],
    photos: [
      photo('IMG_5208.jpg', 'Family visit at Precision Spinal Care'),
      photo('IMG_5210.jpg', 'A family in the Perrysburg treatment room'),
      photo('IMG_5213.jpg', 'Parents and child during a clinic visit'),
      photo('IMG_5237.jpg', 'Family in the treatment room at Precision Spinal Care'),
    ],
  },
  {
    slug: 'pregnancy',
    title: 'Chiropractic for Pregnancy',
    menuLabel: 'Chiropractic for Pregnancy',
    description: 'Gentle prenatal chiropractic care for back pain, pelvic stress, and sciatica in Perrysburg.',
    lede: 'Pregnancy changes the load on the low back, the pelvis, and the nerves that serve the legs.',
    paragraphs: [
      'Sciatica, cramps, and a back that will not let you stand through a day are common. They are not something you have to simply endure until delivery.',
      'We adjust for the stage of pregnancy you are in. The work is gentle. Many women come for pain relief and find that daily tasks are easier when the pelvis and spine are moving as they should.',
    ],
    points: [
      { title: 'The load', text: 'Back, pelvis, and leg nerves take the change in weight.' },
      { title: 'Matched to the trimester', text: 'Position and force follow where you are in the pregnancy.' },
      { title: 'Gentle', text: 'Relief without a forceful twist.' },
    ],
    photos: [
      photo('IMG_5208.jpg', 'Consultation with a mother during a family visit'),
    ],
  },
  {
    slug: 'wellness-care',
    title: 'Wellness Care',
    menuLabel: 'Wellness Care',
    description: 'Preventive structural chiropractic care at Precision Spinal Care in Perrysburg, Ohio.',
    lede: 'Feeling “not sick” is a low bar. Spinal maintenance is how small shifts stay small.',
    paragraphs: [
      'Wellness care here is the same structural standard we use for injuries: measure, correct, and check that the correction held. It is prevention with data, not a standing appointment to crack the same joint forever.',
      'Chelsea, Dr. Taylor’s wife and an advanced nurse practitioner, speaks with patients during wellness visits.',
      'People who wait until they are in pain are choosing the harder version of this work. Maintenance is the quieter one.',
    ],
    points: [
      { title: 'Before it hurts', text: 'Correct the shift while it is still a finding, not a crisis.' },
      { title: 'Same standard', text: 'Imaging and objective checks, not a habit adjustment.' },
      { title: 'Held corrections', text: 'We adjust when you need it, and we stop when you are holding.' },
    ],
    photos: [
      photo('IMG_5362.jpg', 'Chelsea, advanced nurse practitioner, speaking with a patient'),
      photo('IMG_5366.jpg', 'Chelsea speaking with a patient during a wellness visit'),
    ],
  },
];

export const careBySlug = Object.fromEntries(carePages.map((page) => [page.slug, page]));

export interface CareMenuGroup {
  label: string | null;
  slugs: string[];
}

export const careMenu: CareMenuGroup[] = [
  {
    label: null,
    slugs: [
      'structural-chiropractic-vs-traditional-chiropractic',
      'upper-cervical-chiropractic',
      'headaches-migraines',
    ],
  },
  { label: 'Spine Related', slugs: ['back-pain', 'neck-pain', 'sciatica', 'scoliosis'] },
  { label: null, slugs: ['vertigo', '3d-cbct-imaging', 'neuropathy'] },
  { label: 'Injuries', slugs: ['disc-injury', 'whiplash', 'work-injury'] },
  { label: 'Extremities', slugs: ['arm-leg-pain', 'carpal-tunnel', 'shoulder-pain'] },
  {
    label: 'Family Chiropractic',
    slugs: ['chiropractic-care-for-kids', 'pregnancy', 'wellness-care'],
  },
];
