function Title({ toggle, setToggle }) {
  return (
    <div className="wrapping-wrapper">
      <div className="title-box">
        {/* background grey photo? + beheaded emblem */}
        <div className="text-box">
          <p>
            After the full-scale invasion of Russia in Ukraine in February 2022,
            Ukrainian army has killed at least nine generals of the Russian
            army.
          </p>
          <p>
            In a modern military conflict, loss of even one general is quite
            rare as they are usually running operations from deep behind the
            frontline.
          </p>
          <p>Russia has already lost nine of them.</p>
          <p>
            Russia is losing its senior military commanders in unprecedented
            scale due to the major problems in Russian military operations in
            Ukraine and lack of initiative and talented mid-chain commanders in
            Russian army. Generals have to move closer to the frontline to
            command their troops personally and expose themselves to Ukrainian
            strikes. This is one of the big indicators that Russia is having
            enormous problems in Ukraine and that Ukraine can actually win this
            war.
          </p>
        </div>
      </div>
      <button className="list-button" onClick={() => setToggle(!toggle)}>
        Show the list
      </button>
    </div>
  );
}
export default Title;

// {/* <div className="title-box">
//   <h1>9 Russian Generals Killed in Ukraine</h1>
//   {/* background grey photo? + beheaded emblem */}
//   <div className="text-box">
//     <p>
//       After the full-scale invasion of Russia in Ukraine in February 2022,
//       Ukrainian army has killed at least nine generals of the Russian army.
//     </p>
//     <p>
//       In a modern military conflict, loss of even one general is quite rare as
//       they are usually running operations from deep behind the frontline.
//     </p>
//     <p>Russia has already lost nine of them.</p>
//     <p>
//       Russia is losing its senior military commanders in unprecedented scale due
//       to the major problems in Russian military operations in Ukraine and lack
//       of initiative and talented mid-chain commanders in Russian army. Generals
//       have to move closer to the frontline to command their troops personally
//       and expose themselves to Ukrainian strikes. This is one of the big
//       indicators that Russia is having enormous problems in Ukraine and that
//       Ukraine can actually win this war.
//     </p>
//     <button
//       className="list-button"
//       onClick={() => setGeneralsBoxToggle((prevState) => !prevState)}
//     >
//       Show the list
//     </button>
//   </div>
// </div>; */}
