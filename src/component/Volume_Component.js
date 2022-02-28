import {img_mute, img_volume_active} from '../utils/ImageManagement';
import myStyles from './Song_Details.module.css';
import {useState} from 'react';

const Volume_Component = (props) => {

  //init volume
  const [volume, setVolume] = useState(1.0);

  // enable/disable mute
  const muteHandler = () => {
    props.setIsMute(!props.isMute);
  };
  return (
    <div className={myStyles.Volume_container}>
      <img onClick={muteHandler} src={props.isMute ? img_mute : img_volume_active} className={myStyles.image_size}/>
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={props.isMute ? 0.0 : volume}
        onChange={event => {
          setVolume(event.target.valueAsNumber);
          props.isMute ? props.audio_current.volume = 0.0 : props.audio_current.volume = volume;
        }}
      />
    </div>
  );
};
export default Volume_Component;