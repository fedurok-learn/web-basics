"use strict";
// new file
var img, width, height, borderWidth, borderColor, altText, allFields;

window.onload = () => {
  document.getElementById("image-form").addEventListener("submit", e => {
    changeImgProperties();
    e.preventDefault();
  });
  img = document.getElementById("sheep-img");
  width = document.getElementById("width-field");
  height = document.getElementById("height-field");
  borderWidth = document.getElementById("border-width-field");
  borderColor = document.getElementById("border-color-field");
  altText = document.getElementById("altext-field");
  allFields = [width, height, borderWidth, borderColor, altText];
};

const resetColors = () => {
  allFields.forEach(elem => {
    elem.style.borderColor = "";
  });
};

const checkMandatoryFields = () => {
  let success = true;
  allFields.forEach(elem => {
    if (!elem.value) {
      elem.style.borderColor = "red";
      success = false;
    }
  });

  return success;
};

const checkPositiveNumericFields = () => {
  const isNumeric = val => !isNaN(val);
  let success = true;
  [width, height, borderWidth].forEach(elem => {
    if (!isNumeric(elem.value) || elem.value < 0) {
      elem.style.borderColor = "red";
      success = false;
    }
  });

  return success;
};

const checkTextFields = () => {
  const isLatin = val => /^[a-zA-Z]+$/.test(val);
  let correct = true;

  [altText].forEach(elem => {
    if (!isLatin(elem.value)) {
      elem.style.borderColor = "red";
      correct = false;
    }
  });

  return correct;
};

const changeImgProperties = () => {
  resetColors();
  var isMandatory = checkMandatoryFields();
  var isPositive = checkPositiveNumericFields();
  var isLatin = checkTextFields();

  if (isMandatory && isPositive && isLatin) {
    img.width = width.value;
    img.height = height.value;
    img.style.border = `${borderWidth.value}px solid ${borderColor.value}`;
    img.alt = altText.value;
  }

  return false; // so that form won't be sent
};
