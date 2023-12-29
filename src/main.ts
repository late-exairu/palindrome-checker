"use strict";

const check = document.querySelector("#check-btn") as HTMLButtonElement;
const input = document.querySelector("#text-input") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLParagraphElement;

const handleCheck = () => {
  const checkString = input.value.trim();

  console.log("Check String:", checkString);
  const regex = /(?!\_)[0-9A-z]\w*/g;
  const found = checkString.match(regex)?.join(" ");
  console.log("Found:", found);

  if (!found === null || found === undefined) {
    alert("Please input a value");
    return;
  }

  const foundReverse = found.split("").reverse().join("");

  if (found.toLowerCase() === foundReverse.toLowerCase()) {
    result.innerHTML = `<span class="font-bold">${found}</span> is a palindrome`;
  } else {
    result.innerHTML = `<span class="font-bold">${found}</span> is not a palindrome`;
  }
  console.log("Check:", found, foundReverse);
};

check?.addEventListener("click", handleCheck);
