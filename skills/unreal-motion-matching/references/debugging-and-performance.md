# Debugging and performance

## Rewind Debugger

Enable Pose Search and Animation Insights, then open Tools -> Debug -> Rewind Debugger and Rewind
Debugger Details. Record the shortest gameplay segment that shows the defect. Select the character,
expand Animation Blueprint -> Pose Search, and inspect:

- Active Pose;
- Continuing Pose;
- Pose Candidates and their color-coded feature costs;
- database searched and candidates excluded;
- selected clip/time, blend, trajectory, and current gameplay context.

Green cost cells are more favorable, red less favorable, and gray ignored. Diagnose why the expected
candidate lost rather than blindly raising its category weight.

## Symptom matrix

| Symptom | First check |
|---|---|
| Wrong gait/stance | Chooser/database filtering |
| Thrashes between clips | continuing bias, reselect history, noisy trajectory |
| Stays in one loop | missing candidates, negative continuing/loop bias |
| Bad start/stop | coverage and future trajectory |
| Pops at selection | selectable ranges, pose continuity, blend profile |
| Feet slide | data/movement speed, root motion, phase, warping |
| High runtime cost | search set size, channels/samples, search mode/frequency |
| High memory | database density, pruning, principal components, LOD |

Profile representative characters and databases on target hardware. Compare Brute Force for quality
diagnosis, then optimized search. Reduce invalid search breadth before lowering quality. Use database
LOD/density policies deliberately; verify that sparse tiers still preserve starts, stops, pivots, and
readability.
