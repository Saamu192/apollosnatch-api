const MANIFEST_URL = "manifest.json";
const localHost = ["127.0.0.1", "localhost"];

async function main() {
  const manifestJSON = await (await fetch(MANIFEST_URL)).json();
  console.log(manifestJSON);
  const isLocal = !!~localHost.indexOf(window.location.hostname);
  const host = isLocal ? manifestJSON.localHost : manifestJSON.productionHost;
  const videoComponent = new VideoComponent();
  const network = new NetworkHost({ host });
  const videoPlayer = new VideoMediaPlayer({
    manifestJSON,
    network,
    videoComponent,
  });

  videoPlayer.initializeCodec();
  videoComponent.initializePlayer();

  window.nextChunk = (data) => videoPlayer.nextChunk(data);
}

window.onload = main;
