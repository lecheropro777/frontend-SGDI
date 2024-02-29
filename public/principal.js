const PUBLIC_VAPID_KEY =
  "BG2PQAEPq2B0sNF8rGvvO2Bq0nFPkF644GiLRn9o_F0NIjCDmlYwRG-Wo6okeYGdUMuaRvPUy4SCq_SYTWk9VMQ";

console.log(notificacionesBaseURLDev)

const subscribeAndPoll = async () => {
  const subscribe = async () => {
    const register = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: PUBLIC_VAPID_KEY,
    });

    await fetch(notificacionesBaseURLDev, {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


  await subscribe();

  const subscribeInterval = 30 * 60 * 1000; 
  setInterval(async () => {
    await subscribe(); 
  }, subscribeInterval);

};


subscribeAndPoll();
