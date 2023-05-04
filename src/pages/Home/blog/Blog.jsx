import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FaFilePdf } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const Blog = () => {
  const contentRef = useRef(null);

  const handlePdfDownload = () => {
    const opt = {
      margin: 0,
      filename: "blog.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(contentRef.current).save();
  };

  return (
    <div className="max-w-4xl mx-auto py-8" ref={contentRef}>
      <h1 className="text-4xl font-bold mb-8">
        Differences between Controlled and Uncontrolled Components in React
      </h1>
      <p className="text-lg mb-4">
        In React, a controlled component is one whose value is controlled by
        React, while an uncontrolled component's value is determined by the DOM.
        In a controlled component, the component's state is used to store the
        current value of the component.
      </p>

      <h1 className="text-4xl font-bold mb-8">
        Validating React Props using PropTypes
      </h1>
      <p className="text-lg mb-4">
        PropTypes is a built-in library in React that allows developers to
        specify the type of data that should be passed to a component as props.
        To use PropTypes, import the library and specify the prop types for each
        prop:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-8">
        {`import PropTypes from "prop-types";

const MyComponent = ({ name, age }) => {
  // component code
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};`}
      </pre>

      <h1 className="text-4xl font-bold mb-8">
        Difference between Node.js and Express.js
      </h1>
      <p className="text-lg mb-4">
        Node.js is a JavaScript runtime that allows developers to build
        server-side applications using JavaScript. Express.js is a web
        application framework for Node.js that provides additional features for
        building web applications, such as routing, middleware, and templates.
      </p>

      <h1 className="text-4xl font-bold mb-8">Custom Hooks in React</h1>
      <p className="text-lg mb-4">
        A custom hook is a reusable piece of code that allows developers to
        share logic between components. Custom hooks are created using the "use"
        prefix and can be used to encapsulate complex state logic, API calls,
        and other functionality that can be shared between components.
      </p>
      <p className="text-lg mb-8">
        Developers create custom hooks to make their code more reusable and
        modular, reducing the amount of duplicate code needed across components.
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePdfDownload}
      >
        <FaFilePdf className="inline-block mr-2" />
        Download PDF
      </button>
    </div>
  );
};

export default Blog;
