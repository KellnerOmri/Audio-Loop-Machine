import SlideRule from 'react-slide-rule';
import myStyles from './Main.module.css';

const Main_Slider = (props) => {
  return (
    <div className={myStyles.main_slider}>
      <p>{props.count}</p>
      <SlideRule value={props.count}
        onChange={(e) => {
          props.setCount(e);
          props.audioArray.forEach((audio) => {
            return (
              audio.current.currentTime = e
            );
          });
        }}
        max={props.audioArray[0].current ? props.audioArray[0].current.duration : 17}/>
    </div>);
};
export default Main_Slider;

