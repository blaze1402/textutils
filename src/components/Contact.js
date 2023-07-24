import React from "react";

const ContactPage = () => {
  let thanx = () => {
    window.alert("Thank you for contacting us.");
  };

  return (
    <div className="h-screen flex flex-col justify-between gap-4 bg-white dark:bg-gray-700 pt-20 py-5 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4  dark:text-yellow-50">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-yellow-50 mb-6">
          We would love to hear from you! Please use the form below to get in
          touch with us.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-yellow-50 mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-2 rounded-md py-2 px-4 "
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-yellow-50 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-2 rounded-md py-2 px-4 "
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-yellow-50 mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full border-2 rounded-md py-2 px-4 "
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
              onClick={thanx}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
