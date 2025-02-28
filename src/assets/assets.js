import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import img1 from "./noMeDoy.jpg";
import img2 from "./UnAnio.jpg";
import img3 from "./promesa.jpg";
import img4 from "./reik.jpg";
import img5 from "./micro.jpg";
import img6 from "./can.jpg";
import img7 from "./bajo_el_agua.jpg";
import img8 from "./UnAnio.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import img17 from "./bajo_el_agua.jpg";
import img18 from "./destino_casualidad.jpg";
import img19 from "./teAmo.jpg";
import img20 from "./amorBueno.jpg";
import img21 from "./todoCambio.jpg";
import img22 from "./r2.jpg";
import img23 from "./mana.jpg";
import img24 from "./promesa.jpg";
import img25 from "./reik.jpg";
import img26 from "./humble.jpg";
import img27 from "./sinBandera.jpg";
import img28 from "./realB.jpg";
import img29 from "./beele.jpg";
import img30 from "./omar.jpg";
import img31 from "./bab.jpg";
import imgD from "./dedicado.jpeg";
import imgY from "./dedico.jpeg";
import imgC from "./chill.jpeg";



import song1 from "./noMeDoy.mp3";
import song2 from "./unAnio.mp3";
import song3 from "./promesa.mp3";
import song4 from "./creoTi.mp3";
import song5 from "./cafune.mp3";
import song6 from "./querer.mp3";
import song7 from "./otraVez.mp3";
import song8 from "./cristina.mp3";
import song9 from "./9.mp3";
import c from "./destino.mp3";
import song11 from "./teAmo.mp3";
import song12 from "./amorBueno.mp3";
import song13 from "./TodoCambio.mp3";
import song14 from "./ven.mp3";
import song15 from "./luz.mp3";
import song16 from "./patada.mp3";
import song17 from "./jardin.mp3";
import song18 from "./vivo.mp3";
import song19 from "./teVi.mp3";
import song20 from "./aMi.mp3";
import song21 from "./Loco.mp3";
import song22 from "./omar.mp3";
import song23 from "./boda.mp3";
import song24 from "./sorry.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Canciones dedicadas",
    image: imgD,
    desc: "Las canciones que me ha dedicado.",
    bgColor: "#22543d",
  },
  {
    id: 1,
    name: "Playlist que le dedico",
    image: imgY,
    desc: "Canciones que le pueden gustar.",
    bgColor: "#2a4365",
  },
  {
    id: 2,
    name: "Playlist de chill",
    image: imgC,
    desc: "Un poco de todo jjj",
    bgColor: "#742a2a",
  },
];

export const songsData = [
  {
    id: 0,
    name: "No me doy por vencido",
    image: img1,
    file: song1,
    author: "Luis Fonsi",
    desc: "Feeling high, like we're kings of the weekend",
    duration: "3:53",
  },
  {
    id: 1,
    name: "Un año",
    image: img2,
    file: song2,
    author: "Sebastian Yatra",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "3:22",
  },
  {
    id: 2,
    name: "La promesa",
    image: img3,
    file: song3,
    author: "Melendi",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "3:31",
  },
  {
    id: 3,
    name: "Creo en ti",
    image: img4,
    file: song4,
    author: "Reik",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "2:43",
  },
  {
    id: 4,
    name: "Cafuné",
    image: img5,
    file: song5,
    author: "Micro THD",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "4:13",
  },
  {
    id: 5,
    name: "Una y otra vez",
    image: img7,
    file: song7,
    author: "Manuel Medrano",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "3:04",
  },
  {
    id: 6,
    name: "Cristina",
    image: img8,
    file: song8,
    author: "Sebastian Yatra",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "3:21",
  },
  {
    id: 7,
    name: "Patadas de Ahogado",
    image: img26,
    file: song16,
    author: "Humbe ",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "3:44",
  },
  {
    id: 8,
    name: "Tu Jardín Con Enanitos",
    image: img3,
    file: song17,
    author: "Melendi ",
    desc: "Chasing dreams, breaking schemes, bossing up every day",
    duration: "4:27",
  },
  {
    id: 9,
    name: "En Vivo y En Directo",
    image: img22,
    file: song18,
    author: "Fonseca",
    desc: "P.",
    duration: "4:22",
  },
  {
    id: 10,
    name: "Te vi venir",
    image: img27,
    file: song19,
    author: "Sin Bandera",
    desc: "P.",
    duration: "4:22",
  },
];
export const songsDataDedicada = [
  {
    id: 100,
    name: "Destino o Casualidad",
    image: img18,
    file: c,
    author: "Melendi",
    desc: "Destino o Casualidad",
    duration: "4:46",
  },
  {
    id: 101,
    name: "Bajo el agua",
    image: img17,
    file: song9,
    author: "Manuel Medrano",
    desc: "Bajo el agua",
    duration: "3:50",
  },
  {
    id: 102,
    name: "Te amo y más",
    image: img19,
    file: song11,
    author: "Gustavo Santaolalla",
    desc: "Te amo y más",
    duration: "2:36",
  },

];


export const songsForYou =[
  {
    id: 200,
    name: "Amor del bueno",
    image: img20,
    file: song12,
    author: "Reyli Barba",
    desc: "Porque desde que llegaste, todo es más bonito a mi lado.",
    duration: "4:22",
  },
  {
    id: 201,
    name: "Todo cambió",
    image: img21,
    file: song13,
    author: "Camila",
    desc: "Porque desde que te vi, supe que mi vida nunca volvería a ser la misma.",
    duration: "4:22",
  },
  {
    id: 202,
    name: "Ven",
    image: img22,
    file: song14,
    author: "Fonseca",
    desc: "Porque cada vez que estamos lejos, solo quiero que vuelvas a mí.",
    duration: "3:19",
  },
  {
    id: 203,
    name: "Bendita tu luz",
    image: img23,
    file: song15,
    author: "Maná",
    desc: "Porque encontrarte fue lo mejor que me ha pasado.",
    duration: "3:13",
  },
];

export const songChill = [
  
  {
    id: 300,
    name: " A mí",
    image: img28,
    file: song20,
    author: "Rels B",
    desc: "P",
    duration: "3:53",
  },
  {
    id: 301,
    name: "Loco",
    image: img29,
    file: song21,
    author: "Beele",
    desc: "P",
    duration: "3:24",
  },
  {
    id: 302,
    name: "Dutty Love",
    image: img30,
    file: song22,
    author: "Don Omar",
    desc: "P",
    duration: "4:46",
  },
  {
    id: 303,
    name: "Tu boda",
    image: img19,
    file: song23,
    author: "Fuerza Regida",
    desc: "P",
    duration: "3:46",
  },
  {
    id: 304,
    name: "Sorry",
    image: img31,
    file: song24,
    author: "Bab Bunny",
    desc: "P",
    duration: "2:43",
  },
];