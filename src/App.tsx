import "./App.css";
import { Text } from "./components/polymorphic/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" size="md">
        Heading
      </Text>
      <Text as="p" size="md">
        Heading
      </Text>
      <Text as="label" htmlFor="inputId" size="sm" color="secondary">
        Heading
      </Text>
    </div>
  );
}

export default App;
