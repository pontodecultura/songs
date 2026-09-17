import { Track } from "../models/Track.js";

export class CatalogService {
  constructor(database) {
    this.database = database;
    this.tracks = [];
    database.albums.forEach(album =>
      album.tracks.forEach(t => this.tracks.push(new Track(t, album))));
    database.singles.forEach(s =>
      this.tracks.push(new Track(s, null)));
  }
  getAlbums() { return this.database.albums; }
  getSingles() { return this.database.singles; }
  getTrack(id) { return this.tracks.find(t => t.id === id); }
  getTracks(ids) { return ids.map(id => this.getTrack(id)).filter(Boolean); }
  search(q) {
    const term = q.trim().toLowerCase();
    if (!term) return this.tracks;
    return this.tracks.filter(t =>
      `${t.title} ${t.artist} ${t.albumTitle}`.toLowerCase().includes(term));
  }
  getAll() { return this.tracks; }
}