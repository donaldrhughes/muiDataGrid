import Routes from "./components/Routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
