import "./App.css";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";

function App() {
  return (
    <div className="App">
      <CustomButton
        variant="primary"
        onClick={() => {
          console.log("click");
        }}
      >
        hello
      </CustomButton>

      <CustomInput
        type={"text"}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
