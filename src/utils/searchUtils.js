import { ONE_LETTER_ELEMENTS, TWO_LETTER_ELEMENTS } from "./constants";

const TWO_LETTER_UPPER_ELEMENTS = TWO_LETTER_ELEMENTS.map((element) =>
  element.toUpperCase()
);
const ONE_LETTER_UPPER_ELEMENTS = ONE_LETTER_ELEMENTS.map((element) =>
  element.toUpperCase()
);

export const findElementInWord = (word) => {
  let result = [];
  let wordUpper = word.toUpperCase();
  let foundElement = false;

  for (let i = 0; i < wordUpper.length - 1; i++) {
    let twoLetterPart = wordUpper.substring(i, i + 2);
    if (TWO_LETTER_UPPER_ELEMENTS.includes(twoLetterPart) && !foundElement) {
      if (i > 0) result.push([word.substring(0, i), false]);
      result.push([
        word
          .substring(i, i + 2)
          .charAt(0)
          .toUpperCase() + word.substring(i, i + 2).charAt(1),
        true,
      ]);
      foundElement = true;
      if (i + 2 < word.length) result.push([word.substring(i + 2), false]);
      return result;
    }
  }

  if (!foundElement) {
    for (let i = 0; i < wordUpper.length; i++) {
      let oneLetterPart = wordUpper.substring(i, i + 1);
      if (ONE_LETTER_UPPER_ELEMENTS.includes(oneLetterPart) && !foundElement) {
        if (i > 0) result.push([word.substring(0, i).toUpperCase(), false]);
        result.push([word.substring(i, i + 1), true]);
        if (i + 1 < word.length) result.push([word.substring(i + 1), false]);
        return result;
      }
    }
  }

  if (!foundElement) {
    result.push([word, false]);
  }

  return result;
};
