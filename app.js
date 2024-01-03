let message = document.querySelector("#enc-val");
let decmessage = document.querySelector("#dec-val");
let div = document.querySelector("div h1");
document.querySelector("button").addEventListener("click", encodeMessage);

async function encodeMessage(e) {
  e.preventDefault();
  let encodedMessage = "";
  let shift = parseInt(prompt("Enter the shift value: "));
  let inputMessage = message.value;
  
  if (shift > 25 || shift < 0) {
    alert("Shift value must be between 0 and 25");
    return;
  } else if (isNaN(shift) === true) {
    alert("Shift value must be a number");
    return;
  }

  for (let i = 0; i < inputMessage.length; i++) {
    let char = inputMessage[i];
    let charCode = char.charCodeAt(0);

    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let asciiOffset = isUpperCase ? 65 : 97;
      encodedMessage += String.fromCharCode(
        ((charCode + shift - asciiOffset) % 26) + asciiOffset
      );
    } else if (char.match(/[0-9]/)) {
      encodedMessage += String.fromCharCode((charCode - 48 + shift) % 10 + 48);
    } else {
      encodedMessage += String.fromCharCode(charCode + shift);
    }
  }

  console.log("Encoded Message:", encodedMessage);
  div.innerHTML = "Encoded Message: " + encodedMessage;
}

function decodeMessage(e) {
  e.preventDefault();
  let decodedMessage = "";
  let shift = parseInt(prompt("Enter the shift value: "));
  let encodedMessage = decmessage.value;

  for (let i = 0; i < encodedMessage.length; i++) {
    let char = encodedMessage[i];
    let charCode = char.charCodeAt(0);

    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let asciiOffset = isUpperCase ? 65 : 97;
      decodedMessage += String.fromCharCode(
        ((charCode - shift - asciiOffset + 26) % 26) + asciiOffset
      );
    } else if (char.match(/[0-9]/)) {
      decodedMessage += String.fromCharCode((charCode - 48 - shift + 10) % 10 + 48);
    } else {
      decodedMessage += String.fromCharCode(charCode - shift);
    }
  }

  div.innerHTML = "Decoded Message: " + decodedMessage;
}
