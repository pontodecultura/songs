export class PlayerService {
  constructor(audio, onChange) {
    this.audio = audio;
    this.onChange = onChange;
    this.queue = [];
    this.index = -1;
    this.shuffle = false;
    this.repeat = "off";
    this.audio.addEventListener("timeupdate", () => this.emit());
    this.audio.addEventListener("loadedmetadata", () => this.emit());
    this.audio.addEventListener("ended", () => this.handleEnded());
  }
  setQueue(tracks, startIndex = 0) {
    this.queue = [...tracks]; this.index = startIndex; this.load(false);
  }
  current() { return this.queue[this.index] || null; }
  load(autoplay = true) {
    const t = this.current(); if (!t) return;
    this.audio.src = t.audio;
    this.audio.load();
    this.onChange("track", t);
    if (autoplay) this.play();
  }
  async play() { try { await this.audio.play(); this.emit(); } catch(e) { this.onChange("error", e); } }
  pause() { this.audio.pause(); this.emit(); }
  toggle() { this.audio.paused ? this.play() : this.pause(); }
  next() {
    if (!this.queue.length) return;
    if (this.shuffle && this.queue.length > 1) {
      let n; do { n = Math.floor(Math.random()*this.queue.length); } while(n === this.index);
      this.index = n;
    } else this.index = (this.index + 1) % this.queue.length;
    this.load(true);
  }
  prev() {
    if (this.audio.currentTime > 3) { this.audio.currentTime = 0; return; }
    this.index = (this.index - 1 + this.queue.length) % this.queue.length;
    this.load(true);
  }
  toggleShuffle() { this.shuffle = !this.shuffle; this.emit(); }
  toggleRepeat() { this.repeat = this.repeat === "off" ? "all" : this.repeat === "all" ? "one" : "off"; this.emit(); }
  handleEnded() {
    if (this.repeat === "one") { this.audio.currentTime = 0; this.play(); }
    else if (this.repeat === "all" || this.index < this.queue.length - 1) this.next();
    else this.emit();
  }
  seek(percent) { if (this.audio.duration) this.audio.currentTime = this.audio.duration * percent; }
  setVolume(v) { this.audio.volume = v; }
  emit() { this.onChange("state", this.state()); }
  state() { return { playing: !this.audio.paused, currentTime: this.audio.currentTime || 0, duration: this.audio.duration || 0, shuffle: this.shuffle, repeat: this.repeat }; }
}