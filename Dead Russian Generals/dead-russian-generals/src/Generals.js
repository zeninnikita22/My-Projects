import Links from "./Links";
import GeneralsInfo from "./GeneralsInfo";
import ScrollToTopButton from "./ScrollToTopButton";

function Generals({ toggle, setToggle }) {
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
    <div className="generals-wrapper">
      <div className="links-box">
        <Links arr={arr} toggle={toggle} />
      </div>
      <div className="generals-box">
        <GeneralsInfo arr={arr} />;
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Generals;

const arr = [
  {
    fullname: "Andrei Sukhovetsky",
    surname: "Sukhovetsky",
    rank: "Major General",
    position: "Deputy Commander of 41st Combined Arms Army",
    text: "Shot by a sniper at Hostomel on 28 February 2022.Had previously been involved in the Russian military intervention in the Syrian civil war, and 2014 Russian annexation of Crimea.",
    status: "Confirmed",
    id: 1,
  },
  {
    fullname: "Andrei Kolesnikov",
    surname: "Kolesnikov",
    rank: "Major General",
    position: "Commander of 29th Combined Arms Army",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    id: 2,
  },
  {
    fullname: "Oleg Mityaev",
    surname: "Mityaev",
    rank: "Major General",
    position: "Commander of 150th Motorized Rifle Division",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    id: 3,
  },
  {
    fullname: "Yakov Rezantsev",
    surname: "Rezantsev",
    rank: "Lieutenant General",
    position: "Commander of 49th Combined Arms Army",
    text: "Ukrainian officials claimed he was killed as a result of a Ukrainian strike on the command post of the 49th Combined Arms Army in the Chornobaivka airfield in the Kherson Raion.",
    status: "Claimed",
    id: 4,
  },
  {
    fullname: "Vladimir Frolov",
    surname: "Frolov",
    rank: "Major General",
    position: "Deputy Commander of 8th Guards Combined Arms Army",
    text: "No information about his death was released prior to the notice of his funeral at Serafimovskoe Cemetery, St. Petersburg.",
    status: "Confirmed",
    id: 5,
  },
  {
    fullname: "Andrei Simonov",
    surname: "Simonov",
    rank: "Major General",
    position:
      "Chief of Electronic Warfare Troops and 2nd Guards Combined Arms Army",
    text: "Killed during an artillery strike on a command post of the 2nd Combined Arms Army, in the vicinity of Izium.",
    status: "Claimed",
    id: 6,
  },
  {
    fullname: "Kanamat Botashev",
    surname: "Botashev",
    rank: "Major General (retired)",
    position: "Unclear, presumably one of commanders of Wagner groups",
    text: "Killed in the Luhansk region when his Su-25 was shot down by a FIM-92 Stinger missile.",
    status: "Confirmed",
    id: 7,
  },
  {
    fullname: "Roman Kutuzov",
    surname: "Kutuzov",
    rank: "Lieutenant General",
    position:
      'Commander of 1st Army Corps of so-called "Donetsk People\'s Militia"',
    text: "Kutuzov was reportedly killed near the village of Mykolaivka, Popasna Raion, Luhansk Oblast.",
    status: "Confirmed",
    id: 8,
  },
  {
    fullname: "Artem Nasbulin",
    surname: "Nasbulin",
    rank: "Major General",
    position: "Commander of 22nd Army Corps",
    text: "Nasbulin, along with 3 officers and over 140 others, were killed following a Ukrainian strike on a Russian command post in Tavriisk, Kherson Oblast.",
    status: "Claimed",
    id: 9,
  },
];
