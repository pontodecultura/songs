export class Playlist {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.trackIds = Array.isArray(data.trackIds) ? [...data.trackIds] : [];
    this.createdAt = data.createdAt || Date.now();
  }
  add(trackId) {
    if (!this.trackIds.includes(trackId)) this.trackIds.push(trackId);
  }
  remove(trackId) {
    this.trackIds = this.trackIds.filter(id => id !== trackId);
  }
}