
import { useLottie } from "lottie-react";
import {useEffect, useState} from "react";
import {greetingsByTime} from "@/utils/constants.ts";

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
        animationData: greetingsByTime[timeIllustration].lottie,
        loop: true,
        autoplay: true,
    }
    const {View} = useLottie(optionsLottie)

    return (
      <div className={'flex gap-2 items-center'}>
          <div className={'h-full w-20'}>
              {View}
          </div>
          <p>{greetingsByTime[timeIllustration].message}</p>
      </div>
    );
};

export default WelcomeImageByTime;
