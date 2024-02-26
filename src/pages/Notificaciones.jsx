import React, { useState } from "react";
import { Notification } from "../Components/Notification.jsx";

const PUBLIC_KEY ="BG2PQAEPq2B0sNF8rGvvO2Bq0nFPkF644GiLRn9o_F0NIjCDmlYwRG-Wo6okeYGdUMuaRvPUy4SCq_SYTWk9VMQ"
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


export function Notificaciones() {
  const [subscription, setSubscription] = useState(null);

  const subscribe = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/worker.js");
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:urlBase64ToUint8Array(PUBLIC_KEY),
      });
      setSubscription(subscription);
      console.log("Subscription:", subscription);
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  const sendNotification = async () => {
    try {
      await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscription }),
      });

      await fetch("http://localhost:4000/sendNotification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notification: {
            title: "New Notification",
            body: "This is a push notification!",
          },
        }),
      });
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Push Notification Service</h1>
        <button onClick={subscribe}>Subscribe to Push Notifications</button>
        <button onClick={sendNotification}>Send Notification</button>
        {subscription && (
          <Notification
            title="Subscription Successful"
            body="You are now subscribed to push notifications!"
          />
        )}
      </header>
    </div>
  );
}
