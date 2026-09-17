export class AppController {
  constructor({ view, catalog, library, player, storage, database }) {
    this.view=view; this.catalog=catalog; this.library=library; this.player=player; this.storage=storage; this.database=database;
    this.route="home"; this.bind(); this.render();
  }
  bind() {
    document.addEventListener("click", e => this.click(e));
    document.getElementById("searchInput").addEventListener("input", e => this.search(e.target.value));
    document.getElementById("clearSearch").onclick=()=>{document.getElementById("searchInput").value="";this.render();};
    document.getElementById("playBtn").onclick=()=>this.player.toggle();
    document.getElementById("nextBtn").onclick=()=>this.player.next();
    document.getElementById("prevBtn").onclick=()=>this.player.prev();
    document.getElementById("shuffleBtn").onclick=()=>this.player.toggleShuffle();
    document.getElementById("repeatBtn").onclick=()=>this.player.toggleRepeat();
    document.getElementById("progress").oninput=e=>this.player.seek(+e.target.value/100);
    document.getElementById("volume").oninput=e=>{this.player.setVolume(+e.target.value);this.storage.set("pulse-volume",+e.target.value);};
    document.getElementById("audio").addEventListener("error",()=>{});
    document.getElementById("menuBtn").onclick=()=>document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("newPlaylistBtn").onclick=()=>this.openModal();
    document.getElementById("closeModal").onclick=()=>this.closeModal();
    document.getElementById("cancelModal").onclick=()=>this.closeModal();
    document.getElementById("savePlaylist").onclick=()=>this.createPlaylist();
    document.getElementById("volume").value=this.storage.get("pulse-volume",this.database.app.defaultVolume);
    this.player.setVolume(+document.getElementById("volume").value);
  }
  click(e) {
    const el=e.target.closest("[data-route],[data-album],[data-track],[data-favorite],[data-more],[data-playlist],[data-playlist-play]");
    if(!el)return;
    if(el.dataset.route){this.route=el.dataset.route;this.render();return;}
    if(el.dataset.album){const a=this.catalog.getAlbums().find(x=>x.id===el.dataset.album);this.playTracks(a.tracks.map(t=>this.catalog.getTrack(t.id)));return;}
    if(el.dataset.track){this.playTracks(this.catalog.getAll(),this.catalog.getAll().findIndex(t=>t.id===el.dataset.track));return;}
    if(el.dataset.favorite){this.library.toggleFavorite(el.dataset.favorite);this.render();return;}
    if(el.dataset.more){this.openAddMenu(el.dataset.more);return;}
    if(el.dataset.playlist){this.route="playlist:"+el.dataset.playlist;this.render();return;}
    if(el.dataset.playlistPlay){const p=this.library.playlists.find(x=>x.id===el.dataset.playlistPlay);this.playTracks(this.catalog.getTracks(p.trackIds));return;}
  }
  playTracks(tracks,index=0){if(!tracks.length)return;this.player.setQueue(tracks,index);this.library.pushRecent(tracks[index]?.id);this.updateRecentNav();}
  updateRecentNav(){document.getElementById("playlistNav").innerHTML=this.library.playlists.map(p=>`<button class="nav-item small" data-playlist="${p.id}">♫ <span>${this.view.esc(p.name)}</span></button>`).join("");}
  search(q){if(!q.trim()){this.render();return;}this.view.page("Busca",`<div class="track-list">${this.catalog.search(q).map(t=>this.view.trackRow(t,this.library.favorites)).join("")}</div>`);}
  render(){
    document.querySelectorAll(".nav-item[data-route]").forEach(b=>b.classList.toggle("active",b.dataset.route===this.route));
    this.updateRecentNav();
    if(this.route==="home")this.view.renderHome(this.catalog.getAlbums(),this.library.recent.map(id=>this.catalog.getTrack(id)).filter(Boolean),this.library.favorites,this.library);
    else if(this.route==="albums")this.view.renderAlbums(this.catalog.getAlbums());
    else if(this.route==="singles")this.view.renderSingles(this.catalog.getSingles(),this.library.favorites);
    else if(this.route==="playlists")this.view.renderPlaylists(this.library.playlists);
    else if(this.route==="settings")this.view.renderSettings(this.database.app);
    else if(this.route.startsWith("playlist:")){const p=this.library.playlists.find(x=>x.id===this.route.split(":")[1]); if(p)this.view.renderPlaylist(p,this.catalog.getTracks(p.trackIds),this.library.favorites);else this.route="playlists";}
  }
  openModal(){document.getElementById("modal").classList.remove("hidden");document.getElementById("playlistName").focus();}
  closeModal(){document.getElementById("modal").classList.add("hidden");document.getElementById("playlistName").value="";}
  createPlaylist(){const name=document.getElementById("playlistName").value.trim();if(!name)return;this.library.createPlaylist(name);this.closeModal();this.render();}
  openAddMenu(trackId){
    const playlists=this.library.playlists;
    if(!playlists.length){this.openModal();return;}
    const names=playlists.map((p,i)=>`${i+1}. ${p.name}`).join("\n");
    const answer=prompt(`Adicionar faixa à playlist:\n${names}\n\nDigite o número:`);
    const n=Number(answer)-1;if(Number.isInteger(n)&&playlists[n]){this.library.addToPlaylist(playlists[n].id,trackId);this.render();}
  }
}