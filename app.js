let message = document.querySelector("#enc-val");
let decmessage = document.querySelector("#dec-val");

document.querySelector("button").addEventListener("click", encodeMessage);

async function encodeMessage(e) {
  e.preventDefault();
  let encodedMessage = "";
  let shift = parseInt(prompt("Enter the shift value: "));
  let inputMessage = message.value;

  for (let i = 0; i < inputMessage.length; i++) {
    let char = inputMessage[i];
    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let asciiOffset = isUpperCase ? 65 : 97;
      encodedMessage += String.fromCharCode(
        ((char.charCodeAt(0) + shift - asciiOffset) % 26) + asciiOffset
      );
    } else {
      encodedMessage += char;
    }
  }
  console.log("Encoded Message:", encodedMessage);
}

function decodeMessage(e) {
  e.preventDefault();
  let decodedMessage = "";
  let shift = parseInt(prompt("Enter the shift value: "));
  let encodedMessage = decmessage.value;

  for (let i = 0; i < encodedMessage.length; i++) {
    let char = encodedMessage[i];
    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let asciiOffset = isUpperCase ? 65 : 97;
      decodedMessage += String.fromCharCode(
        ((char.charCodeAt(0) - shift - asciiOffset + 26) % 26) + asciiOffset
      );
    } else {
      decodedMessage += char;
    }
  }
  console.log("Decoded Message:", decodedMessage);
}
