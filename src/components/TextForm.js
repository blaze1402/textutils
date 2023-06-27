import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleConvertToUpper = () => {
    const converted = text.toUpperCase();
    setText(converted);
  };

  const handleConvertToLower = () => {
    const converted = text.toLowerCase();
    setText(converted);
  };

  const capitalizeEachWord = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedText = capitalizedWords.join(" ");
    setText(capitalizedText);
  };

  const removeWhitespace = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
  };

  const reverseText = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };

  const replaceText = () => {
    const findWord = window.prompt("Enter the word to find:");
    if (findWord !== null) {
      const replaceWord = window.prompt("Enter the word to replace it with:");
      if (replaceWord !== null) {
        const replacedText = text.replace(
          new RegExp(`\\b${findWord}\\b`, "gi"),
          replaceWord
        );
        setText(replacedText);
      }
    }
  };

  const handleClearText = () => {
    setText("");
  };

  let emptyText = text === "" ? 0 : text.trim().split(/\s+/).length;

  const handleCopyText = () => {
    let text = document.getElementById("textArea");
    navigator.clipboard.writeText(text.value);
  };

  return (
    <div className="px-56 pt-2 pb-14 dark:bg-slate-700">
      <label
        htmlFor="textArea"
        className="block text-lg font-medium text-gray-700 dark:text-yellow-50"
      >
        Enter the text to be analyzed:
      </label>
      <textarea
        id="textArea"
        className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded-md"
        rows="12"
        value={text}
        onChange={handleTextChange}
      ></textarea>

      <div className="">
        <button
          className="bg-red-600 hover:bg-red-700 text-white mr-2 mb-2 px-4 py-2 rounded-md"
          onClick={handleClearText}
        >
          Clear Text
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleConvertToUpper}
        >
          Convert to Uppercase
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleConvertToLower}
        >
          Convert to Lowercase
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={capitalizeEachWord}
        >
          Capitalize Each Word
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={removeWhitespace}
        >
          Remove Whitespace
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={reverseText}
        >
          Reverse Text
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={replaceText}
        >
          Replace Text
        </button>

        <button
          className="bg-green-500 text-white mr-2 px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
      </div>

      <div className="flex mt-5 dark:text-yellow-50">
        <h3 className="text-lg font-semibold">Text Summary:</h3>
        <p className="mt-1 ml-3">
          {emptyText} words | {text.length} characters
        </p>
      </div>
    </div>
  );
};

export default TextForm;
