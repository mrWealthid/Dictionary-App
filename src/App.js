import Header from "./Components/Header";
import Display from "./Components/Display";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import { Switch } from "@headlessui/react";

function App() {
  const [meaning, setMeaning] = useState([]);

  const [word, setWord] = useState("");

  const [category, setCategory] = useState("en");

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      .then(({ data }) => {
        console.log(data);
        setMeaning(data);
      })
      .catch((error) => console.log(error));
  }, [word, category]);

  return (
    <div
      className={`bg-${
        enabled ? "black" : "white"
      } transition duration-1000 flex flex-col px-6 opacity-70  min-h-screen`}
    >
      <div className="flex flex-row-reverse py-3 justify-between items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-gray-600" : "bg-black"
          }  inline-flex items-center h-6 rounded-full transform scale-75 lg:scale-90 w-11`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } transition duration-1000 inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <Navbar enabled={enabled} />
      </div>

      <Header
        meaning={meaning}
        word={word}
        setWord={setWord}
        category={category}
        setCategory={setCategory}
        enabled={enabled}
      />
      <Display meaning={meaning} word={word} enabled={enabled} />
    </div>
  );
}

export default App;
