import myStyles from './Song_Details.module.css';

const Song_Slider = (props) => {
  const GetTime = (count) => {
    let seconds = Math.floor(count);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);
    return `${FixLessThanTen(minutes)}:${FixLessThanTen(seconds)}`;
  };
  const FixLessThanTen = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  };
  return (
    <div className={myStyles.Song_Slide_container}>
      {<span>{GetTime(props.count)}</span>}
      <input
        className={myStyles.slider_style}
        type="range"
        min={0}
        max={props.audio_current ? props.audio_current.duration : 17}
        step={0.02}
        value={props.count}
        onChange={event => {
          props.audioArray.forEach((audio) => {
            audio.current.currentTime = event.target.valueAsNumber;
          });
          props.setCount(event.target.valueAsNumber);
        }}
      />
      <span>{props.audio_current ? GetTime(props.audio_current.duration) : `Song ${props.index + 1}`}</span>
    </div>
  );
};
export default Song_Slider;