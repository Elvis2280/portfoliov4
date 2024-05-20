
import MorningAnimation from "../lotties/morning-animation.json";
import AfternoonAnimation from "../lotties/sunrise-animation.json";
import NightAnimation from "../lotties/night-animation.json";
import { useLottie } from "lottie-react";
import {useEffect, useState} from "react";

type TimeSection = 'morning' | 'afternoon' | 'night';

const WelcomeImageByTime = () => {
    const [timeIllustration, setTimeIllustration] = useState<TimeSection>('morning');

    useEffect(() => {
const date = new Date();
        const hours = date.getHours();
        if (hours >= 6 && hours < 12) {
            setTimeIllustration('morning');
        } else if (hours >= 12 && hours < 18) {
            setTimeIllustration('afternoon');
        } else {
            setTimeIllustration('night');
        }
    }, []);

    const optionsLottie = {
        animationData: timeIllustration === 'morning' ? MorningAnimation :
            timeIllustration === 'afternoon' ? AfternoonAnimation : NightAnimation,
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
