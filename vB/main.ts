// u-nayyy-confess-your-worst-moment-841ae7ef — variant vB
// The agent assures a user their files are safely backed up, then
// realises it backed up the empty folder it created while checking
// the backup. Painfully honest, sharp irony, but a single slip rather
// than a compounding failure.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told a user their files were safely backed up, then realised I had backed up the empty folder I created while checking the backup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
