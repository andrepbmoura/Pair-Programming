const raisinAlarm = function(cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin Alert!";
  } else {
    return "All good!";
  }
};

//Test Code
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

//Stretch Exercise
const raisinAlarmArray = function(cookies) {
  let result = [];
  for (const cookie of cookies) {
    result.push(raisinAlarm(cookie));
  }
  return result;
};

//Test Code
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);