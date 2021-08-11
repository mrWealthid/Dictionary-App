import React from "react";
import Option from "./Option";
import Country from "./Country";

const Header = ({ meaning, word, enabled, category, setWord, setCategory }) => {
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="w-10/12 mx-auto">
      <h1
        className={`${
          enabled ? "text-white" : "text-black"
        } text-xl lg:text-3xl p-6 font-Poppins text-center`}
      >
        {word ? word : "Word Count"}
      </h1>
      <div className="flex flex-col  md:flex-row md:space-x-10 justify-between">
        <input
          className="border-b w-full mb-3 md:mb-0 font-Poppins shadow rounded-xl text-sm  gray-400 py-1 lg:py-2 px-4 outline-none"
          type="text"
          autoComplete="off"
          autoFocus
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter Word"
          name="word"
        />

        <select
          className="w-full border-b shadow rounded-xl text-sm  py-1 lg:py-2 px-4 font-Poppins outline-none"
          type="Select"
          name="language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {Country.map((item) => (
            <Option key={item.label} item={item} />
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
