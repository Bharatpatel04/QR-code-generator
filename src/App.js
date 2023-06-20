import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [value, SetValue] = useState("");
  const [qrVisible,SetqrVisible]=useState(false);
  const QrCodeGenerator=()=>{
              if(!value)
              return ;
              SetqrVisible(true);
  }

  return (
    <div className="container">
      <h1>QR Code generator 🔥</h1>
      <input
        type="text"
        placeholder="enter url"
        value={value}
        onChange={(e) => SetValue(e.target.value)}
      />
      <button onClick={QrCodeGenerator}>Generate QR code</button>
      {
        qrVisible &&(
           <div className="qr-code">
            <QRCode value={value} size={300}/>
            <a href={<QRCode/>} download="code.png">Download</a>
           </div>
           )
      }
    </div>
  );
}

export default App;
