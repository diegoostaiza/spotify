import { createContext, useEffect, useRef, useState } from "react";
import { albumsData, songsData, songsDataDedicada, songsForYou , songChill} from "../assets/assets";

export const PlayContext = createContext();

const PlayContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  // Estado para almacenar la lista de canciones actual
  const [songList, setSongList] = useState(songsData);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  // Función para cambiar la lista de canciones según el álbum seleccionado
  const updateSongList = (albumId) => {
    const album = albumsData.find((a) => a.id === parseInt(albumId));
    if (!album) return;

    if (album.name === "Canciones dedicadas") {
      setSongList(songsDataDedicada);
      setTrack(songsDataDedicada[0]); // Iniciar con la primera canción del álbum
    } else {
      setSongList(songsData);
      setTrack(songsData[0]);
    }
  };

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const plaWithID = (id) => {
    const song = [...songsData, ...songsDataDedicada, ...songsForYou , ...songChill].find((song) => song.id === id);
    if (song) {
      setTrack(song);
      play();
    }
  };
  
  

  const previous = async () => {
    const currentIndex = songList.findIndex((s) => s.id === track.id);
    if (currentIndex > 0) {
      await setTrack(songList[currentIndex - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    const currentIndex = songList.findIndex((s) => s.id === track.id);
    if (currentIndex < songList.length - 1) {
      await setTrack(songList[currentIndex + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";

        const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
        const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
        const totalSeconds = Math.floor(audioRef.current.duration % 60);
        const totalMinutes = Math.floor(audioRef.current.duration / 60);

        setTime({
          currentTime: {
            second: currentSeconds.toString().padStart(2, "0"),
            minute: currentMinutes.toString().padStart(2, "0"),
          },
          totalTime: {
            second: totalSeconds.toString().padStart(2, "0"),
            minute: totalMinutes.toString().padStart(2, "0"),
          },
        });
      };
    }, 1000);
  });

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    plaWithID,
    next,
    previous,
    seekSong,
    updateSongList, // Añadimos la función al contexto
  };

  return <PlayContext.Provider value={contextValue}>{props.children}</PlayContext.Provider>;
};

export default PlayContextProvider;
