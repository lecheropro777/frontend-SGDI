import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context/ContextProvider";
import { TablaLogs } from "../Components/TablaLogs";

export function Logs() {
  const { verLogs } = useContext(Contexto);
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    const consultarLogs = async () => {
      const response = await verLogs();
      setLogs(response.data)
      
    };
    consultarLogs();
  }, []);
  return (
    <div>
      <TablaLogs data={logs}/>
    </div>
  );
}
