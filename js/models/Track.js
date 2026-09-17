export class Track {
  constructor(data, album = null) {
    Object.assign(this, data);
    this.albumId = album?.id ?? data.albumId ?? null;
    this.albumTitle = album?.title ?? data.albumTitle ?? "";
    this.albumCover = album?.cover ?? data.cover ?? "assets/covers/default.svg";
  }
}