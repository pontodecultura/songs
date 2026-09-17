import { Playlist } from "./Playlist.js";

export class Library {
  constructor(storage) {
    this.storage = storage;
    this.key = "pulse-library-v1";
    const saved = this.storage.get(this.key, { playlists: [], favorites: [], recent: [] });
    this.playlists = saved.playlists.map(p => new Playlist(p));
    this.favorites = saved.favorites || [];
    this.recent = saved.recent || [];
  }
  persist() {
    this.storage.set(this.key, {
      playlists: this.playlists,
      favorites: this.favorites,
      recent: this.recent
    });
  }
  createPlaylist(name) {
    const p = new Playlist({ id: crypto.randomUUID(), name, trackIds: [] });
    this.playlists.push(p); this.persist(); return p;
  }
  deletePlaylist(id) {
    this.playlists = this.playlists.filter(p => p.id !== id); this.persist();
  }
  toggleFavorite(id) {
    this.favorites = this.favorites.includes(id)
      ? this.favorites.filter(x => x !== id) : [...this.favorites, id];
    this.persist(); return this.favorites.includes(id);
  }
  addToPlaylist(pid, tid) {
    const p = this.playlists.find(x => x.id === pid);
    if (p) { p.add(tid); this.persist(); }
  }
  removeFromPlaylist(pid, tid) {
    const p = this.playlists.find(x => x.id === pid);
    if (p) { p.remove(tid); this.persist(); }
  }
  pushRecent(id) {
    this.recent = [id, ...this.recent.filter(x => x !== id)].slice(0, 30);
    this.persist();
  }
}