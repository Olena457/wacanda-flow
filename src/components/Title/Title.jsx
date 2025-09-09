import React from "react";

const Title = ({ tag, className, text }) => {
  return React.createElement(tag, { className }, text);
};
export default Title;
