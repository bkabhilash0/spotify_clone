import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroCard = () => {
  return (
    <div className="w-full py-9 px-5 flex gap-6 bg-gradient-to-tr from-black to-transparent h-80 min-w-[1176px]">
      <Image
        src={"/images/flashback_radio_tamil.jpeg"}
        alt="Flashback Radio Tamil"
        width={250}
        height={250}
        style={{ objectFit: "cover" }}
      />

      <div className="text-white flex flex-col justify-between gap-3">
        <p className="text-xs font-semibold mb-2">PLAYLIST</p>
        <h1 className="text-6xl font-semibold mb-2">Flashback Radio - Tamil</h1>
        <p className="text-sm font-semibold mb-2">
          Dive into nostalgia with these evergreen Tamile Hits
        </p>
        <div className="flex gap-6">
          <Link href={"/"}>
            <p className="bg-green-500 inline-block px-8 py-3 rounded-3xl text-black font-semibold">
              Play
            </p>
          </Link>
          <Link href={"/"}>
            <p className="bg-transparent border-white outline-white border-2 inline-block px-8 py-3 rounded-3xl text-white font-semibold">
              Follow
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
