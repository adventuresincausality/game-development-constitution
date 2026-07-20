# Coverage, warping, and contact

## Coverage matrix

Inventory animation data across:

- gait/speed bands and direction;
- stationary starts and moving accelerations;
- decelerations/stops by lead foot;
- pivots and turn angles;
- sustained loops and curved paths;
- slopes/stairs/crouch/carry/weapon states as required;
- interruption and transition poses.

Compare the root-motion speed distribution with the movement model. When gameplay moves faster than
the fastest data, the database can repeatedly choose its maximum-speed pose; reducing that pose's
weight hides the real mismatch.

## Procedural correction

Use Orientation, Stride, and related animation-warping nodes to extend nearby data, not replace whole
missing movement categories. Establish a correct selected pose/root trajectory first, then add one
warp and test its maximum acceptable deviation. Layer leg/foot IK after the base locomotion and
warping result.

Foot sliding checks:

1. root-motion clip speed versus capsule/trajectory speed;
2. chosen frame and phase continuity;
3. blend duration/profile;
4. stride/orientation warp scale;
5. ground-contact IK and moving-base handling.

For duplicate footsteps caused by rapid adjacent pose selections, use Anim Notify filtering on the
Notify. It does not apply to Notify States. Do not let a cosmetic footstep Notify drive authoritative
gameplay.
