import React from "react";

const Option = ({ item }) => {
  return (
    <>
      <option value={item.label}>{item.value}</option>
    </>
  );
};

// Option.defaultProps = {
//   value: "en_US",
//   content: "English",
// };

export default Option;
