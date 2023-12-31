const check = document.querySelector("#check-btn") as HTMLButtonElement;
const input = document.querySelector("#text-input") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLDivElement;

const handleCheck = (e: Event) => {
  e.preventDefault();
  const checkString = input.value;
  const regex = /[0-9a-zA-Z]/g;
  const found = checkString.match(regex)?.join("");

  if (!found) {
    alert("Please input a value");
    return;
  }

  const foundReverse = found.split("").reverse().join("");

  if (found.toLowerCase() === foundReverse.toLowerCase()) {
    result.innerHTML = `<span class="font-bold text-green-400">${checkString}</span> is a palindrome`;
  } else {
    result.innerHTML = `<span class="font-bold text-red-400">${checkString}</span> is not a palindrome`;
  }
};

check?.addEventListener("click", handleCheck);
