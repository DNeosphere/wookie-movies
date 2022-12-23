import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Detail } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
