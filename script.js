var sleepHours = Number(prompt("How many hours did you sleep last night?"));

if (sleepHours > 12) {
  console.log(`"Are you sure? Let's try this again!`);
} else if (sleepHours >= 8) {
  console.log(`"That's wonderful! What good sleep habits you have!`);
} else if (sleepHours >= 5) {
  console.log(`"Try to get at least 8 hours of sleep tonight.`);
} else {
  console.log(`"You really need to sleep more!"`);
}
