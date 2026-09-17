import { DATABASE } from "./database.js";
import { StorageService } from "./services/StorageService.js";
import { CatalogService } from "./services/CatalogService.js";
import { PlayerService } from "./services/PlayerService.js";
import { Library } from "./models/Library.js";
import { AppView } from "./views/AppView.js";
import { AppController } from "./controllers/AppController.js";

const storage = new StorageService();
const catalog = new CatalogService(DATABASE);
const library = new Library(storage);
const view = new AppView(document.getElementById("view"));
const player = new PlayerService(document.getElementById("audio"), (type,data)=>{
  if(type==="track"){
    document.getElementById("playerTitle").textContent=data.title;
    document.getElementById("playerArtist").textContent=data.artist || data.albumTitle || "";
    document.getElementById("playerCover").src=data.cover || data.albumCover || "assets/covers/default.svg";
  }
  if(type==="state"){
    const s=data;
    document.getElementById("playBtn").textContent=s.playing?"Ⅱ":"▶";
    document.getElementById("progress").value=s.duration ? (s.currentTime/s.duration)*100 : 0;
    document.getElementById("currentTime").textContent=format(s.currentTime);
    document.getElementById("duration").textContent=format(s.duration);
    document.getElementById("shuffleBtn").classList.toggle("on",s.shuffle);
    document.getElementById("repeatBtn").classList.toggle("on",s.repeat!=="off");
  }
});
new AppController({view,catalog,library,player,storage,database:DATABASE});

function format(sec){sec=Math.floor(sec||0);return `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;}
