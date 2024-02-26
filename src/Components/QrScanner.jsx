import { useCallback, useState, lazy } from "react";
// import QrScanner from "react-qr-scanner";
const QRS =lazy(()=> import("react-qr-scanner"))

export const QRScanner = ({ onScan }) => {
  const [result, setResult] = useState("");

  const handleScan = useCallback(
    (data) => {
      if (data) {
        setResult(data.text);
        onScan(data.text);
      }
    },
    [onScan]
  );
  const handleError = useCallback((err) => {
    console.error(err);
  }, []);

  return (
    <div>
      <QRS
        onScan={handleScan}
        onError={handleError}
        style={{ width: "250px" }}
        constraints={{ video: { facingMode: "environment" }, audio: false }}
      />

      <p>{result}</p>
    </div>
  );
};
