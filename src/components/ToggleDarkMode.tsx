import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const htmlTag = document.querySelector("html");
    if (isDarkMode) {
      htmlTag && htmlTag.classList.add("dark");
    } else {
      htmlTag && htmlTag.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <button className={"dark:text-teal-400 text-teal-700 text-xl"}>
        {isDarkMode ? (
          <IoMdSunny onClick={() => setIsDarkMode(!isDarkMode)} />
        ) : (
          <IoMdMoon onClick={() => setIsDarkMode(!isDarkMode)} />
        )}
      </button>
    </>
  );
};
