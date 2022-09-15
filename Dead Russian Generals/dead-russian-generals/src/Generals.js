import sukhovetskyimg from "./Images/Andrey_Sukhovetsky_photo.jpg";
import kolesnikovimg from "./Images/Kolesnikov.jpeg";
import mityaevimg from "./Images/Mityaev.jpeg";
import rezantsevimg from "./Images/Ryezantsev.jpeg";
import frolovimg from "./Images/Florov.jpeg";
import simonovimg from "./Images/Simonov.png";
import botashevimg from "./Images/Botashev.jpeg";
import kutuzovimg from "./Images/Major_General_Roman_Kutuzov_gives_a_speech_in_Chita_(2019-01-13).jpeg";
import nasbulinimg from "./Images/Nasbulin.webp";
import Links from "./Links";
import GeneralsInfo from "./GeneralsInfo";
test;

function Generals() {
  return (
    <div className="general-box">
      <div className="links-box">
        <Links arr={arr} />
      </div>
      <GeneralsInfo arr={arr} />;
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
    photo: { sukhovetskyimg },
  },
  {
    name: "Andrei Kolesnikov",
    rank: "Major General",
    position: "Commander of 29th Combined Arms Army",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    photo: { kolesnikovimg },
  },
  {
    name: "Oleg Mityaev",
    rank: "Major General",
    position: "Commander of 150th Motorized Rifle Division",
    text: "Killed somewhere near Mariupol.",
    status: "Claimed",
    photo: { mityaevimg },
  },
  {
    name: "Yakov Rezantsev",
    rank: "Lieutenant General",
    position: "Commander of 49th Combined Arms Army",
    text: "Ukrainian officials claimed he was killed as a result of a Ukrainian strike on the command post of the 49th Combined Arms Army in the Chornobaivka airfield in the Kherson Raion.",
    status: "Claimed",
    photo: { rezantsevimg },
  },
  {
    name: "Vladimir Frolov",
    rank: "Major General",
    position: "Deputy Commander of 8th Guards Combined Arms Army",
    text: "No information about his death was released prior to the notice of his funeral at Serafimovskoe Cemetery, St. Petersburg.",
    status: "Confirmed",
    photo: { frolovimg },
  },
  {
    name: "Andrei Simonov",
    rank: "Major General",
    position:
      "Chief of Electronic Warfare Troops and 2nd Guards Combined Arms Army",
    text: "Killed during an artillery strike on a command post of the 2nd Combined Arms Army, in the vicinity of Izium.",
    status: "Claimed",
    photo: { simonovimg },
  },
  {
    name: "Kanamat Botashev",
    rank: "Major General (retired)",
    position: "Unclear, presumably one of commanders of Wagner groups",
    text: "Killed in the Luhansk region when his Su-25 was shot down by a FIM-92 Stinger missile.",
    status: "Confirmed",
    photo: { botashevimg },
  },
  {
    name: "Roman Kutuzov",
    rank: "Lieutenant General",
    position:
      'Commander of 1st Army Corps of so-called "Donetsk People\'s Militia"',
    text: "Kutuzov was reportedly killed near the village of Mykolaivka, Popasna Raion, Luhansk Oblast.",
    status: "Confirmed",
    photo: { kutuzovimg },
  },
  {
    name: "Artem Nasbulin",
    rank: "Major General",
    position: "Commander of 22nd Army Corps",
    text: "Nasbulin, along with 3 officers and over 140 others, were killed following a Ukrainian strike on a Russian command post in Tavriisk, Kherson Oblast.",
    status: "Claimed",
    photo: { nasbulinimg },
  },
];
