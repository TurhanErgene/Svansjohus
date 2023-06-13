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
          Meeting and Events
        </h1>
        <h2 className="text-font text-2xl font-semibold drop-shadow-xl pt-4">
          Host a corporate wellness retreat!
        </h2>

        <h2 className="text-font text-2xl font-semibold drop-shadow-xl pt-14 mb-4">
          Room Set-up Examples:{" "}
        </h2>

        <div className="flex flex-col items-center my-6">
          <h3 className="text-font text-xl font-semibold drop-shadow-xl">
            Banquet
          </h3>
          <p className="text-font text-lg drop-shadow-lg items-center w-4/6 md:w-2/6 ">
            Generally used for meals and sessions involving small group
            discussions. A five-foot round table seats eight people comfortably.
            A six-foot round table seats ten people comfortably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Conference and Hollow Square
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Appropriate for interactive discussions and note-taking sessions
              for fewer than 25 people. Many hotels have elegant "boardrooms"
              for 10 to 20 people, equipped with full audiovisual capabilities,
              a writing board, cork board, and a flip chart.
            </p>
            <img
              alt="square"
              src={square}
              className="h-56 w-auto my-4 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              E-Shape, U-Shape and T-Shape
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Appropriate for groups of fewer than 40 people. These are best for
              interaction with a leader seated at the head of the setup.
              Audiovisual is usually best set up at the open end of the seating.
            </p>
            <img
              alt="shaped"
              src={shaped}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Theater
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Appropriate for large sessions and short lectures that do not
              require extensive note-taking. This is a convenient setup to use
              before breaking into discussion or role-playing groups because
              chairs can be moved.
            </p>
            <img
              alt="theater"
              src={theater}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Reception
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Stand-up social function where beverages and light foods are
              served. Foods may be presented on small buffet tables or passed by
              servers. May precede a meal function.
            </p>
            <img
              alt="reception"
              src={reception}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Schoolroom or Classroom
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              The most desirable setup for medium to large-size lectures.
              Requires a relatively large room. Tables provide attendees with
              space for spreading out materials and taking notes.
            </p>
            <img
              alt="classroom"
              src={classroom}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-font text-xl font-semibold drop-shadow-xl">
              Ovals and Rounds
            </h3>
            <p className="text-font text-lg drop-shadow-lg items-center w-4/6">
              Generally used for meals and sessions involving small group
              discussions. A five foot round table seats eight people
              comfortably. A six foot round table seats 10 people comfortably.
            </p>
            <img
              alt="rounds"
              src={rounds}
              className="h-56 w-auto my-4 mb-8 mx-auto rounded-lg shadow-xl shadow-amber-900/4"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-24 mt-8">
          <div>
            <h2 className="text-font text-xl font-semibold drop-shadow-xl mt-4 mb-2">
              Equipments and Services
            </h2>
            <ul className="mb-8 text-font text-lg drop-shadow-lg items-center">
              <li>Audio-Visual Equipment</li>
              <li>Teleconferencing</li>
              <li>Videoconferencing</li>
              <li>Wireless Internet</li>
            </ul>
          </div>

          <div>
            <h2 className="text-font text-xl font-semibold drop-shadow-xl mt-4 mb-2">
              Business Services
            </h2>
            <ul className="mb-8 text-font text-lg drop-shadow-lg items-center">
              <li>Computers</li>
              <li>Copy Service</li>
              <li>Printers</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
