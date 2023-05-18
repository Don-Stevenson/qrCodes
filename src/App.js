import "./style.css";
import QRCode from "./components/QRCode";

const App = () => {
  return (
    <container>
      <h1 className="title">Learn QR Codes</h1>
      <div className="section container">
        <QRCode />
      </div>
    </container>
  );
};

export default App;
