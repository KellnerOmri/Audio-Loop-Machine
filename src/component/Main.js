import {useEffect, useRef, useState} from 'react';
import {
  all_track,
  b_voc,
  drums,
  he_he_voc,
  high_voc,
  jibrish,
  lead_1,
  tambourine_shake_higher, uuho_voc
} from '../utils/AudioManagement';
import Song_Details from './Song_Details';
import myStyles from './Main.module.css';
import {defaultColor} from '../utils/DictioneryManagement';
import Main_Slider from './Main_Slider';
import {img_is_loop, img_is_not_loop, img_pause, img_play, img_stop} from '../utils/ImageManagement';


const Main = () => {
  //init array of audios
  const audioArray = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const audioArrayName = [tambourine_shake_higher, all_track, b_voc, drums, he_he_voc, high_voc, jibrish, lead_1, uuho_voc];

  const [isPlay, setIsPlay] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoop, setIsLoop] = useState(true);

  // play/pause audios.
  const playHandler = () => {
    setIsPlay(!isPlay);
    {
      isPlay ? audioArray.forEach((audio) => {
        audio.current.play();
      }) : audioArray.forEach((audio, index) => {
        audio.current.pause();
      });
    }
  };

  //stop button pressed - all audios will pause and back to the beginning
  const stopHandler = () => {
    setIsPlay(true);
    setIsReset(!isReset);
    audioArray.forEach((audio) => {
      audio.current.pause();
      audio.current.currentTime = 0;
    });
    setCount(0);
  };

  //loop button pressed - enable/disable loop
  const loopHandler = () => {
    setIsLoop(!isLoop);
  };

  //set interval until the audio will download.
  useEffect(() => {
    const id = setInterval(() => !isPlay && setCount(audioArray[0].current.currentTime), 20);
    return () => {
      clearInterval(id);
    };
  }, [isPlay]);


  return (
    <div className={myStyles.Main_container}>
      {audioArray.map((audio, index) => {
        return (
          <div key={index} className={myStyles.Song_style}>
            <Song_Details
              src={audioArrayName[index]}
              audio={audio}
              loop={isLoop}
              count={count}
              isPlay={isPlay}
              defualtColor={defaultColor[index]}
              setCount={setCount}
              index={index}
              audioArray={audioArray}
            />
          </div>
        );
      })}
      <Main_Slider count={count} setCount={setCount} audioArray={audioArray}/>
      <div className={myStyles.Bottom_Container}>
        <img className={myStyles.img_style} onClick={stopHandler} src={img_stop}/>
        <img className={myStyles.img_style} onClick={playHandler} src={isPlay ? img_play : img_pause}/>
        <img className={myStyles.img_style} onClick={loopHandler} src={isLoop ? img_is_loop : img_is_not_loop}/>
      </div>
    </div>
  );

};

export default Main;