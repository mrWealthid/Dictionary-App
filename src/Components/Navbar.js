import React from "react";

const Navbar = ({ enabled }) => {
  return (
    <div
      className={`${
        enabled ? "text-white" : "text-black"
      } font-Poppins space-y-2`}
    >
      <h1 className="text-lg lg:text-xl">Dictionary</h1>

      <p className="text-xs hidden md:block text font-light max-w-sm lg:w-full">
        Built With React Hooks, Google Dictionary Api, Axios & Tailwind CSS
      </p>
    </div>
  );
};

export default Navbar;
