import { VideoComponent } from "./src/videoComponent";

const MANIFEST_URL = "manifest.json";
const localHost = ["127.0.0.1", "localhost"];

async function main() {
  const isLocal = !!~localHost.indexOf(window.location.hostname);
  const manifestJSON = await (await fetch(MANIFEST_URL)).json();
  const host = isLocal ? manifestJSON.localHost : manifestJSON.productionHost;
  const videoComponent = new VideoComponent();

  videoComponent.initializePlayer();
}

window.onload = main;
