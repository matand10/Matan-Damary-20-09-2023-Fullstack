import Lottie from "lottie-react"
import LoaderAnimation from '../assets/animation/loader.json';
const Loader = () => {
    return (
        <Lottie
            animationData={LoaderAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
        />
    )
}

export default Loader
