export function swDev() {
  let seUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(seUrl).then((res) => {
    console.log("Service Worker Activated");
  });
}
