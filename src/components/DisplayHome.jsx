// import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import CardItem from "./CardItem";
import { songsData , songsForYou} from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Creados para ti</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <CardItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Canciones que me recuerda a usted</h1>
        <div className="flex overflow-auto">
          {songsForYou.map((items, index) => (
            <SongItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
