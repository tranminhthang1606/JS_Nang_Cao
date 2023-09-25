const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Subtitution"],
  [47, "GOAL"],
  [61, "Subtitution"],
  [64, "Yellow card"],
  [69, "Red Card"],
  [70, "Subtitution"],
  [72, "Subtitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
//ex1.
const events = new Set(gameEvents.values());
console.log(events);
//ex2.
if (gameEvents.has(64)) {
  gameEvents.delete(64);
}
console.log(gameEvents);

//ex3.
const time = [...gameEvents.keys()].pop();

console.log(`1 sự kiện xảy ra trung bình mỗi ${time / gameEvents.size} phút`);

//ex4.

for (const [key, value] of gameEvents) {
  let round = key <= 45 ? "Hiệp 1" : "Hiệp 2";
  console.log(`[${round}] ${key}: ${value}`);
}

//LAB2.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING
//CHANLLENGE	#4)

//ex1
let testArr = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];
let button = document.querySelector("button");
let textArea = document.querySelector("textarea");

button.addEventListener("click", () => {
  let value = textArea.value;
  let rows = value.split("\n");
  let count = 0;
  for (let text of rows) {
    if (text.indexOf("_") > 0) {
      text = text.split("_");
      text[0] = text[0].replace(text[0][0], text[0][0].toLowerCase());
      text[1] = text[1].replace(text[1][0], text[1][0].toLocaleUpperCase());
      text = text[0].concat(text[1]);
      count = count + 1;
      console.log(text + " " + "✅".repeat(count));
    }
  }
});
//LAB2.3: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> STRING
//METHOD	PRACTICE)

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "�" : ""}${type.replaceAll(
    "_"," "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

//LAB2.4: (SECTION	10: A CLOSER	LOOK	AT	FUNCTIONS	> CODING	CHANLLENGE	#2)

(function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
 document.querySelector('body').addEventListener('click', function () {
 header.style.color = 'blue';
 });
})()