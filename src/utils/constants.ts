import MorningAnimation from "../lotties/morning-animation.json";
import AfternoonAnimation from "../lotties/sunrise-animation.json";
import NightAnimation from "../lotties/night-animation.json";

export const greetingsByTime = {
    morning: {
        message: "Good morning",
        lottie: MorningAnimation
    },
    afternoon: {
        message: "Good afternoon",
        lottie: AfternoonAnimation
    },
    night: {
        message: "Good night",
        lottie: NightAnimation
    }
};
