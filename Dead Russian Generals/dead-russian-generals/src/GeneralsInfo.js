import GeneralsItem from "./GeneralsItem";

function GeneralsInfo({ arr }) {
  return arr.map((item) => {
    return <GeneralsItem item={item} />;
  });
}

export default GeneralsInfo;
