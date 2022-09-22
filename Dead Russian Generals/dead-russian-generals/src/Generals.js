import Links from "./Links";
import GeneralsInfo from "./GeneralsInfo";
import ScrollToTopButton from "./ScrollToTopButton";

function Generals({ toggle, setToggle, containerHeight }) {
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div
      className="generals-box"
      style={
        toggle
          ? { height: 0, transition: "height 3s ease-out" }
          : { height: { containerHeight }, transition: "height 3s ease-out" }
      }
    >
      <button onClick={() => setToggle(!toggle)}>^^^</button>
      <div className="links-box">
        <Links arr={arr} />
      </div>
      <GeneralsInfo arr={arr} />;
      <ScrollToTopButton />
    </div>
  );
}

export default Generals;

const arr = [
  {
    name: "Andrei Sukhovetsky",
    rank: "Major General",
    position: "Deputy Commander of 41st Combined Arms Army",
    text: "Shot by a sniper at Hostomel on 28 February 2022.Had previously been involved in the Russian military intervention in the Syrian civil war, and 2014 Russian annexation of Crimea.",
    status: "Confirmed",
    id: 1,
  },
  {
    name: "Andrei Kolesnikov",
    rank: "Major General",
    position: "Commander of 29th Combined Arms Army",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    id: 2,
  },
  {
    name: "Oleg Mityaev",
    rank: "Major General",
    position: "Commander of 150th Motorized Rifle Division",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    id: 3,
  },
  {
    name: "Yakov Rezantsev",
    rank: "Lieutenant General",
    position: "Commander of 49th Combined Arms Army",
    text: "Ukrainian officials claimed he was killed as a result of a Ukrainian strike on the command post of the 49th Combined Arms Army in the Chornobaivka airfield in the Kherson Raion.",
    status: "Claimed",
    id: 4,
  },
  {
    name: "Vladimir Frolov",
    rank: "Major General",
    position: "Deputy Commander of 8th Guards Combined Arms Army",
    text: "No information about his death was released prior to the notice of his funeral at Serafimovskoe Cemetery, St. Petersburg.",
    status: "Confirmed",
    id: 5,
  },
  {
    name: "Andrei Simonov",
    rank: "Major General",
    position:
      "Chief of Electronic Warfare Troops and 2nd Guards Combined Arms Army",
    text: "Killed during an artillery strike on a command post of the 2nd Combined Arms Army, in the vicinity of Izium.",
    status: "Claimed",
    id: 6,
  },
  {
    name: "Kanamat Botashev",
    rank: "Major General (retired)",
    position: "Unclear, presumably one of commanders of Wagner groups",
    text: "Killed in the Luhansk region when his Su-25 was shot down by a FIM-92 Stinger missile.",
    status: "Confirmed",
    id: 7,
  },
  {
    name: "Roman Kutuzov",
    rank: "Lieutenant General",
    position:
      'Commander of 1st Army Corps of so-called "Donetsk People\'s Militia"',
    text: "Kutuzov was reportedly killed near the village of Mykolaivka, Popasna Raion, Luhansk Oblast.",
    status: "Confirmed",
    id: 8,
  },
  {
    name: "Artem Nasbulin",
    rank: "Major General",
    position: "Commander of 22nd Army Corps",
    text: "Nasbulin, along with 3 officers and over 140 others, were killed following a Ukrainian strike on a Russian command post in Tavriisk, Kherson Oblast.",
    status: "Claimed",
    id: 9,
  },
];
