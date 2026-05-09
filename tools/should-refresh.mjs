const now = process.env.TRAVEL_REFRESH_NOW ? new Date(process.env.TRAVEL_REFRESH_NOW) : new Date();
const tripStart = new Date("2026-05-19T00:00:00-06:00");
const tripEnd = new Date("2026-06-08T00:00:00-06:00");

let shouldRun = false;
let reason = "";

if (now >= tripEnd) {
  reason = "Trip has ended; refresh disabled.";
} else if (now >= tripStart) {
  shouldRun = true;
  reason = "During trip; refresh hourly.";
} else if (now.getUTCHours() % 3 === 0) {
  shouldRun = true;
  reason = "Before trip; refresh on three-hour cadence.";
} else {
  reason = "Before trip; skipping until next three-hour refresh window.";
}

console.log(`should_run=${shouldRun}`);
console.log(`reason=${reason}`);

if (process.env.GITHUB_OUTPUT) {
  const { appendFileSync } = await import("node:fs");
  appendFileSync(process.env.GITHUB_OUTPUT, `should_run=${shouldRun}\nreason=${reason}\n`);
}
