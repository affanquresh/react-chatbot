import { Answer } from "./Answers";

const Results = ({item, index}) => {
  return (
  <>
    <div
      key={index + Math.random}
      className={item.type == "q" ? "flex justify-end" : ""}
    >
      {item.type === "q" ? (
        <li
          key={index}
          className="text-right bg-zinc-500 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl w-fit p-2"
        >
          <Answer ans={item.text} totalResult={1} index={index} />
        </li>
      ) : (
        item.text.map((ansItem, ansIndex) => (
          <li key={ansIndex + Math.random} className="text-left p-2">
            <Answer ans={ansItem} totalResult={item.length} index={ansIndex} />
          </li>
        ))
      )}
    </div>
    </>
  );
};
export default Results;
