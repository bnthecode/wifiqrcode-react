import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [qrCode, setQrCode] = useState();

  useEffect(() => {
    async function fetchQrCode() {
      const { data } = await axios.get("http://localhost:8080/qrcode");
      setQrCode(data);
    }
    fetchQrCode();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={qrCode} height="400px" />
      </header>
    </div>
  );
}

export default App;
