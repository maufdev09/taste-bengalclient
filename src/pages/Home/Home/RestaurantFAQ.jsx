import React from "react";

function RestaurantFAQ() {
  const faqItems = [
    {
      question: "What are your hours of operation?",
      answer: "We are open from 11am to 9pm every day except for Sundays.",
    },
    {
      question: "Do you take reservations?",
      answer:
        "Yes, we accept reservations for parties of 6 or more. Please call ahead to make a reservation.",
    },
    {
      question: "Is your restaurant wheelchair accessible?",
      answer: "Yes, we have wheelchair ramps and accessible restrooms.",
    },
    {
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend smart casual attire.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto lg:max-w-none">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-6">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                {item.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default RestaurantFAQ;
