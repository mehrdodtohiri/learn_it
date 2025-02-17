import React, { useRef, useState } from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const VideoPlayer = ({video}) => {
  const videoRef = useRef(null); // Ссылка на элемент видео
  const [isPlaying, setIsPlaying] = useState(false); // Состояние воспроизведения

  // Обработчик нажатия на кнопку
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Остановить видео
      } else {
        videoRef.current.play(); // Запустить видео
      }
      setIsPlaying(!isPlaying); // Обновить состояние
    }
  };

  return (
    <div style={{ position: 'relative', width: '300px' }} className='flex justify-center items-center'>
      {/* Видео */}
      <video
        ref={videoRef}
        src={video}
        width="200"
        style={{ display: 'block' }}
        className='w-[250px] rounded-[10px]'
      />
      {/* Кнопка Play/Pause */}
      <button
        onClick={handlePlayPause}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
      </button>
    </div>
  );
};

export default VideoPlayer;
