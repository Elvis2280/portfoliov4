import {Button} from "../../@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

export const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const htmlTag = document.querySelector('html');
        if (isDarkMode) {
           htmlTag && htmlTag.classList.add('dark');
        } else {
           htmlTag && htmlTag.classList.remove('dark');
        }

    }, [isDarkMode]);
    return (
        <>
            <Button>
                {
                    isDarkMode ? <IoMdSunny onClick={() => setIsDarkMode(!isDarkMode)} /> : <IoMdMoon onClick={() => setIsDarkMode(!isDarkMode)} />
                }
            </Button>
        </>
    );
};
