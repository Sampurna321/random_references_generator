function generateReference() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let reference = "";
  let hasLetter = false;
  let hasNumber = false;

  while (reference.length < 6) {
    const random = Math.random();
    if (random < 0.5 && !hasLetter) {
      // Ensure at least one letter
      const randomIndex = Math.floor(Math.random() * letters.length);
      reference += letters[randomIndex];
      hasLetter = true;
    } else if (random >= 0.5 && !hasNumber) {
      // Ensure at least one number
      const randomIndex = Math.floor(Math.random() * numbers.length);
      reference += numbers[randomIndex];
      hasNumber = true;
    } else {
      // Add either letter or number
      const randomSet = random < 0.5 ? letters : numbers;
      const randomIndex = Math.floor(Math.random() * randomSet.length);
      reference += randomSet[randomIndex];
    }
  }

  document.getElementById("reference").innerText = reference;
  copyToClipboard(reference);
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  const messageElement = document.getElementById("message");
  messageElement.innerText = "Copied!";
  messageElement.style.visibility = "visible";
  setTimeout(() => {
    messageElement.style.visibility = "hidden";
  }, 2000);
}
