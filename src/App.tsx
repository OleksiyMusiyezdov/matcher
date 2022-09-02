import { useSelector } from "react-redux";
import { allDataSelector } from "./redux/selectors";
import "./App.css";
import { InputBlock } from "./components/input-block.component";
import { OutputBlock } from "./components/output-block.component";

function App() {
  const {
    isLoading,
    firstFirstName,
    firstSecondName,
    secondFirstName,
    secondSecondName,
    count,
    list,
  } = useSelector(allDataSelector);

  // console.log(
  //   isLoading,
  //   firstFirstName,
  //   firstSecondName,
  //   secondFirstName,
  //   secondSecondName,
  //   count,
  //   list
  // );

  return (
    <div className="App">
      <InputBlock />
      <OutputBlock
        isLoading={isLoading}
        firstFirstName={firstFirstName}
        firstSecondName={firstSecondName}
        secondFirstName={secondFirstName}
        secondSecondName={secondSecondName}
        count={count ? count : 0}
        list={list ? list : []}
      />
    </div>
  );
}

export default App;
