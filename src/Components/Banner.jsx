import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {

    return (
        <AutoplaySlider
        style={{ height: '800px' }} 
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div data-src="https://i.ibb.co/TMDphTp/istockphoto-1347150429-612x612.jpg" />
            <div data-src="https://i.ibb.co/smzSwks/stock-photo-mechanic-overalls-repairing-car-auto-repair-shop.jpg" />

        </AutoplaySlider>
    );
};

export default Banner;