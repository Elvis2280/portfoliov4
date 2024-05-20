
import MorningAnimation from "../lotties/morning-animation.json";
import {Controls, Player} from "@lottiefiles/react-lottie-player";
import { useLottie } from "lottie-react";


const WelcomeImageByTime = () => {
    const optionsLottie = {
        animationData: MorningAnimation,
        loop: true,
        autoplay: true,
    }
    const {View} = useLottie(optionsLottie)
    return (
      <div className={'flex gap-2 items-center'}>
          <div className={'h-full w-20'}>
              {View}
          </div>
          <p>Good morning!</p>
      </div>
    );
};


export default WelcomeImageByTime;
