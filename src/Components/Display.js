import React from "react";

const Display = ({ meaning, word, enabled }) => {
  return (
    <div
      className={`${enabled ? "text-white" : "text-black"}
     w-full lg:w-10/12 mx-auto flex border px-4 mt-10 flex-col`}
    >
      {meaning[0] && (
        <audio
          className="w-10/12 lg:w-5/12 my-5 mx-auto"
          controls
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
        >
          Browser Doesn't Support audio
        </audio>
      )}
      {meaning[0] && (
        <p
          className={`${
            enabled ? "text-white" : "text-black"
          } lg:w-5/12 mb-5 font-Poppins lg:mx-auto lg:text-center text-xs`}
        >
          <b>Pronounciation: {""}</b>
          {meaning[0].phonetics[0] && meaning[0].phonetics[0].text}
        </p>
      )}

      {meaning[0] && (
        <p
          className={`${
            enabled ? "text-white" : "text-black"
          } lg:w-5/12 mb-5 font-Poppins lg:mx-auto lg:text-center text-xs`}
        >
          <b>Synonyms(nearest in meaning): </b>
          {(meaning[0].meanings &&
            meaning[0].meanings[0].definitions[0].synonyms
              .slice(0, 4)
              .join(", ")) ||
            "unavailable"}
        </p>
      )}

      {meaning[0] && (
        <p
          className={`${
            enabled ? "text-white" : "text-black"
          } lg:w-5/12 mb-5 font-Poppins lg:mx-auto lg:text-center text-xs`}
        >
          <b>Antonyms(opposite): {""}</b>
          {(meaning[0].meanings &&
            meaning[0].meanings[0].definitions[0].antonyms.join(", ")) ||
            "Unavailable"}
        </p>
      )}

      {word ? (
        meaning.map((_first) =>
          _first.meanings.map((_second) =>
            _second.definitions.map((_third, index) => (
              <div
                key={index}
                className={`${
                  enabled ? "bg-black" : ""
                } flex transform transition duration-1000 border-b  text-sm py-3 font-Poppins space-y-2 flex-col lg:p-6`}
              >
                <p>
                  <b>Definition: {""}</b>
                  {_third.definition || "Unavailable"}
                </p>
                <p>
                  <b>Example: {""}</b>

                  {_third.example || "Unavailable"}
                </p>
              </div>
            ))
          )
        )
      ) : (
        <p
          className={`${
            enabled ? "text-white" : "text-black"
          } font-Poppins text-center animate-float p-4 lg:text-sm text-sm`}
        >
          Start By Typing Now...
        </p>
      )}
    </div>
  );
};

export default Display;
