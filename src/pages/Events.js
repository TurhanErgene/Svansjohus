import React from "react";
import { motion } from "framer-motion";
import square from "../pictures/HollowSquare.png";
import shaped from "../pictures/shaped.png";
import theater from "../pictures/theater.png";
import classroom from "../pictures/classroom.png";
import rounds from "../pictures/rounds.png";
import reception from "../pictures/reception.png";

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-900 drop-shadow-xl mt-6 mb-2">
          Möten och Events
        </h1>
        <h2 className="text-font text-2xl font-semibold drop-shadow-xl pt-4">
          Håll en hälsoretreat för företag!{" "}
        </h2>

        <h2 className="text-font text-2xl font-semibold drop-shadow-xl pt-14 mb-4">
          Exempel på rumskonfiguration:{" "}
        </h2>

        <div className="flex flex-col items-center my-6">
          <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Bankett
          </h3>
          <p className="text-font text-lg drop-shadow-lg items-center w-4/6 md:w-2/6 ">
            Används vanligtvis för måltider och sessioner med små
            gruppdiskussioner. Bäst lämpat med runda bord, storleken anpassat
            efter antal vid bordet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Konferens – fyrkantigt bord
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Lämplig för interaktiva diskussioner och anteckningssessioner för
              färre än 25 personer. Bygg upp det som ett styrelserum med full
              audiovisuell kapacitet, en skrivtavla, anslagstavla och ett
              blädderblock.
            </p>
            <img
              alt="square"
              src={square}
              className="h-56 w-auto my-4 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              E-, U- och T-formad
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Lämplig för grupper på färre än 40 personer. Dessa är bäst för
              interaktion med en ledare som sitter i spetsen av uppställningen.
              Audiovisuell är vanligtvis bäst placerad i den öppna änden av
              uppställningen.
            </p>
            <img
              alt="shaped"
              src={shaped}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Teater
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
            Lämplig för stora sessioner och kortare föreläsningar, som inte kräver omfattande anteckningar.
Detta är en bekväm inställning att använda innan du går in i diskussions- eller rollspelsgrupper

eftersom stolarna kan flyttas.
            </p>
            <img
              alt="theater"
              src={theater}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Mottagning
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
            Stående tillställning där drycker och lättare mat serveras. Livsmedel kan presenteras på små
buffébord eller serveras av serveringspersonal. Kan föregå som en måltidsfunktion.
            </p>
            <img
              alt="reception"
              src={reception}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Skolsal eller klassrum
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
            Den mest önskvärda inställningen för medelstora till stora föreläsningar. Kräver ett relativt stort
rum. Borden ger deltagarna utrymme för att sprida ut material och ta anteckningar.
            </p>
            <img
              alt="classroom"
              src={classroom}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Ovala- och rundabord
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
            Användas vanligtvis för måltider och sessioner med små gruppdiskussioner.
Bäst lämpat med runda- eller ovala bord, storleken anpassat efter antal vid bordet.
            </p>
            <img
              alt="rounds"
              src={rounds}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
        </div>

        <div className="mt-8">
          <div>
            <h2 className="text-font text-xl font-semibold drop-shadow-xl mt-4 mb-2">
            Utrustning och tjänster
            </h2>
            <ul className="mb-8 text-font text-lg drop-shadow-lg items-center">
              <li>Audiovisuell utrustning</li>
              <li>Telefonkonferens</li>
              <li>Videokonferens</li>
              <li>Trådlöst internet</li>
              <li>Datorer</li>
              <li>Kopieringsmaskin</li>
              <li>Skrivare</li>
              
            </ul>
          </div>

          
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
