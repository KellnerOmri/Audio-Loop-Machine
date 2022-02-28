import { useState} from 'react';
import Volume_Component from './Volume_Component';
import Song_Slider from './Song_Slider';
import myStyles from './Song_Details.module.css';
import ColorPickerComponent from './color_picker';

const Song_Details = (props) => {
  const [isMute, setIsMute] = useState(false);
  const [selectedColor, setSelectedColor] = useState(props.defualtColor);
  const onChange = (event) => {
    setSelectedColor(event.hex);
  };
  return (
    <div className={myStyles.Container} style={{backgroundColor: selectedColor}}>
      <audio
        src={props.src}
        ref={props.audio}
        muted={isMute}
        loop={props.loop}
      />
      <ColorPickerComponent onColorSelect={onChange} className={myStyles.color_picker}/>
      <Song_Slider
        count={props.count}
        audio_current={props.audio.current}
        setCount={props.setCount}
        audioArray={props.audioArray}
        index={props.index}
      />
      <Volume_Component
        audio_current={props.audio.current}
        muteHandler={props.muteHandler}
        isMute={isMute}
        setIsMute={setIsMute}
      />
    </div>
  );
};
export default Song_Details;