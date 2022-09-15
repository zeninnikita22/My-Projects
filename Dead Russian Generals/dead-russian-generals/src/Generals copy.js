// import { useRef } from "react";

// function Generals() {
//   const sukhovetsky = useRef(null);
//   const kolesnikov = useRef(null);
//   const mityaev = useRef(null);
//   const rezantsev = useRef(null);
//   const frolov = useRef(null);
//   const simonov = useRef(null);
//   const botashev = useRef(null);
//   const kutuzov = useRef(null);
//   const nasbulin = useRef(null);

//   const scrollToSection = (elementRef) => {
//     window.scrollTo({
//       top: elementRef.current.offsetTop,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="general-box">
//       <div className="click-menu">
//         <a
//           className="click"
//           href="#sukhovetsky"
//           onClick={() => scrollToSection(sukhovetsky)}
//         >
//           one
//         </a>
//         <a
//           className="click"
//           href="#kolesnikov"
//           onClick={() => scrollToSection(kolesnikov)}
//         >
//           two
//         </a>
//         <a
//           className="click"
//           href="#mityaev"
//           onClick={() => scrollToSection(mityaev)}
//         >
//           three
//         </a>
//         <a
//           className="click"
//           href="#rezantsev"
//           onClick={() => scrollToSection(rezantsev)}
//         >
//           four
//         </a>
//         <a
//           className="click"
//           href="#frolov"
//           onClick={() => scrollToSection(frolov)}
//         >
//           five
//         </a>
//         <a
//           className="click"
//           href="#simonov"
//           onClick={() => scrollToSection(simonov)}
//         >
//           six
//         </a>
//         <a
//           className="click"
//           href="#botashev"
//           onClick={() => scrollToSection(botashev)}
//         >
//           seven
//         </a>
//         <a
//           className="click"
//           href="#kutuzov"
//           onClick={() => scrollToSection(kutuzov)}
//         >
//           eight
//         </a>
//         <a
//           className="click"
//           href="#nasbulin"
//           onClick={() => scrollToSection(nasbulin)}
//         >
//           nine
//         </a>
//       </div>
//       <div className="general" ref={sukhovetsky}>
//         <div className="image-box">
//           <img
//             alt="portrait_sukhovetsky"
//             src="../Images/Andrey_Sukhovetsky_photo.jpg"
//           ></img>
//         </div>
//         <div className="text-box">
//           Shot by a sniper at Hostomel on 28 February 2022.Had previously been
//           involved in the Russian military intervention in the Syrian civil war,
//           and 2014 Russian annexation of Crimea.
//         </div>
//       </div>
//       <div className="general" ref={kolesnikov}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_kolesnikov" src="../Images/Kolesnikov.jpeg"></img>
//         </div>
//         <div className="text-box"> Killed somewhere near Mariupol</div>
//       </div>
//       <div className="general" ref={mityaev}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_mityaev" src="../Images/Mityaev.jpeg"></img>
//         </div>
//         <div className="text-box">Killed somewhere near Mariupol.</div>
//       </div>
//       <div className="general" ref={rezantsev}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_rezantsev" src="../Images/Ryezantsev.jpeg"></img>
//         </div>
//         <div className="text-box">
//           Ukrainian officials claimed he was killed as a result of a Ukrainian
//           strike on the command post of the 49th Combined Arms Army in the
//           Chornobaivka airfield in the Kherson Raion.
//         </div>
//       </div>
//       <div className="general" ref={frolov}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_frolov" src="../Images/Florov.jpeg"></img>
//         </div>
//         <div className="text-box">
//           No information about his death was released prior to the notice of his
//           funeral at Serafimovskoe Cemetery, St. Petersburg
//         </div>
//       </div>
//       <div className="general" ref={simonov}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_simonov" src="../Images/Simonov.png"></img>
//         </div>
//         <div className="text-box">
//           Killed during an artillery strike on a command post of the 2nd
//           Combined Arms Army, in the vicinity of occupied Izium.
//         </div>
//       </div>
//       <div className="general" ref={botashev}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_botashev" src="../Images/Botashev.jpeg"></img>
//         </div>
//         <div className="text-box">
//           Killed in the Luhansk region when his Su-25 was shot down by a FIM-92
//           Stinger missile Botashev had been previously discharged from the
//           Russian Air Force for crashing a Su-27. Ukrainian sources suggested
//           that he might have been deployed as part of the paramilitary
//           organization Wagner Group.
//         </div>
//       </div>
//       <div className="general" ref={kutuzov}>
//         {" "}
//         <div className="image-box">
//           <img
//             alt="portrait_kutuzov"
//             src="../Images/Major_General_Roman_Kutuzov_gives_a_speech_in_Chita_(2019-01-13).jpeg"
//           ></img>
//         </div>
//         <div className="text-box">
//           Reported by Russian state television reporter Alexander Sladkov on the
//           Telegram messaging app. Kutuzov was reportedly killed near the village
//           of Mykolaivka, Popasna Raion, Luhansk Oblast. Kutuzov's promotion from
//           major general was announced posthumously.
//         </div>
//       </div>
//       <div className="general" ref={nasbulin}>
//         {" "}
//         <div className="image-box">
//           <img alt="portrait_nasbulin" src="../Images/Nasbulin.webp"></img>
//         </div>
//         <div className="text-box">
//           Odesa Oblast representative Serhiy Bratchuk claimed Nasbulin, along
//           with 3 officers and over 140 others, were killed following a Ukrainian
//           strike on a Russian command post in Tavriisk, Kherson Oblast. However,
//           The Moscow Times could not find any evidence supporting Nasbulin's
//           existence.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Generals;
