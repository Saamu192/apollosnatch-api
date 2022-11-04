class VideoComponent {
  constructor() {}

  initializePlayer() {
    const player = videojs("vid");
    const modalDialog = videojs.getComponent("ModalDialog");
    const modal = new modalDialog(player, {
      temporary: false,
      closeable: true,
    });
    player.addChild(modal);
  }
}

export { VideoComponent };
