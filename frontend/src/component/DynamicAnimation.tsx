import Lottie from "lottie-react"
import CloudyAnimation from '../assets/animation/cloudy.json';
import HotAnimation from '../assets/animation/hot.json';
import RainAnimation from '../assets/animation/rain.json';
import SnowAnimation from '../assets/animation/snow.json';
import SunAnimation from '../assets/animation/sun.json';

const DynamicAnimation = ({ temp }: { temp: string }) => {
    let animation
    if (+temp >= 26) animation = HotAnimation
    else if (+temp >= 19) animation = SunAnimation
    else if (+temp >= 16) animation = CloudyAnimation
    else if (+temp >= 4) animation = RainAnimation
    else animation = SnowAnimation

    return (
        <div className="forecast-animation">
            <Lottie
                animationData={animation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
export default DynamicAnimation