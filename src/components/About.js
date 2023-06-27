import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white pt-2 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About TextUtils</h1>
        <p className="text-gray-700 mb-6">
          TextUtils is a web application designed to provide various text
          utility functions. It offers a range of features to help users
          manipulate and analyze text in a convenient and efficient way.
        </p>
        <h2 className="text-xl font-bold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            Text Conversion: Easily convert text to uppercase or lowercase as
            needed.
          </li>
          <li>
            Word and Character Count: Quickly determine the number of words and
            characters in your text.
          </li>
          <li>
            Find and Replace: Seamlessly find specific words or phrases in your
            text and replace them with your desired alternatives.
          </li>
          <li>
            Whitespace Removal: Effortlessly remove extra whitespace between
            words, ensuring clean and consistent text formatting.
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>React: A JavaScript library for building user interfaces.</li>
          <li>
            Tailwind CSS: A utility-first CSS framework for efficient and
            flexible styling.
          </li>
          <li>
            JavaScript: The programming language used for client-side logic.
          </li>
          <li>
            HTML: The markup language utilized for building the structure of the
            application.
          </li>
        </ul>
        <p className="text-gray-700">
          For more information and to contribute to the project, please visit
          the{" "}
          <a
            className="underline text-blue-600"
            href="https://github.com/blaze1402/textutils"
          >
            TextUtils
          </a>{" "}
          GitHub repository.
        </p>
      </div>
      <p className="fixed w-full bottom-0 pl-[40%] font-bold">
        Copyright 2023{" "}
        <a className="text-green-600" href="https://github.com/blaze1402">
          Vijay Kumar Singh ❤
        </a>
      </p>
    </div>
  );
};

export default AboutPage;
