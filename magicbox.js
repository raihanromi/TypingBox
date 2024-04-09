const getTextAreaValue = () =>
  document.getElementById("magicboxTextArea").value;
const setTextAreaValue = (value) =>
  (document.getElementById("magicboxTextArea").value = value);

let addNumberId = false;

const clearBtn = () => {
  setTextAreaValue("");
  addNumberId = false;
};

const toggleCase = () => {
  let textareaValue = getTextAreaValue();
  if (textareaValue == "") {
    alert("The box is empty");
  }
  setTextAreaValue(
    textareaValue === textareaValue.toUpperCase()
      ? textareaValue.toLowerCase()
      : textareaValue.toUpperCase()
  );
};

const addNumber = () => {
  let textareaValue = getTextAreaValue();

  if (textareaValue == "") {
    alert("The box is empty");
  }
  if (textareaValue !== "" && !addNumberId) {
    let textArr = textareaValue
      .split("\n")
      .map((item, index) => `${index + 1}.${item}`);
    setTextAreaValue(textArr.join("\n"));
    addNumberId = true;
  }
};

const sortText = () => {
  let textareaValue = getTextAreaValue();
  if (textareaValue == "") {
    alert("The box is empty");
  }
  let sortedText = textareaValue.split("\n").sort().join("\n");
  setTextAreaValue(sortedText);
};

const randomPostionText = () => {
  let textareaValue = getTextAreaValue();
  if (textareaValue == "") {
    alert("The box is empty");
  }
  let text = textareaValue.split("\n");
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffledArray = shuffle(text);
  console.log(shuffledArray);
  setTextAreaValue(shuffledArray.join("\n"));
};

const reverseText = () => {
  let textareaValue = getTextAreaValue();
  if (textareaValue == "") {
    alert("The box is empty");
  }
  let sortedText = textareaValue.split("\n").reverse().join("\n");
  setTextAreaValue(sortedText);
};
