// Catálogo estático. Troque as URLs pelos arquivos do seu GitHub Pages/raw.
export const DATABASE = {
  app: {
    name: "Pulse",
    version: "1.0.0",
    githubBase: "", // Ex.: https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
    defaultVolume: 0.8
  },
  albums: [
    {
      id: "album-nova",
      title: "Nova Frequência",
      artist: "Aurora Lab",
      year: 2026,
      cover: "assets/covers/demo-1.svg",
      tracks: [
        { id: "nova-01", title: "Horizonte", duration: "3:42", audio: "assets/audio/horizonte.mp3" },
        { id: "nova-02", title: "Sinais", duration: "4:05", audio: "assets/audio/sinais.mp3" },
        { id: "nova-03", title: "Depois da Chuva", duration: "3:18", audio: "assets/audio/depois-da-chuva.mp3" }
      ]
    },
    {
      id: "album-echo",
      title: "Echoes",
      artist: "Neon Fields",
      year: 2025,
      cover: "assets/covers/demo-2.svg",
      tracks: [
        { id: "echo-01", title: "Blue Signal", duration: "3:30", audio: "assets/audio/blue-signal.mp3" },
        { id: "echo-02", title: "Static Love", duration: "3:57", audio: "assets/audio/static-love.mp3" }
      ]
    },
    {
      id: "album-orbit",
      title: "Orbit",
      artist: "Luna Code",
      year: 2026,
      cover: "assets/covers/demo-3.svg",
      tracks: [
        { id: "orbit-01", title: "Perigeu", duration: "4:12", audio: "assets/audio/perigeu.mp3" },
        { id: "orbit-02", title: "Apogeu", duration: "3:51", audio: "assets/audio/apogeu.mp3" }
      ]
    }
  ],
  singles: [
    { id: "single-01", title: "Linha do Tempo", artist: "Aurora Lab", year: 2026, cover: "assets/covers/demo-1.svg", audio: "assets/audio/linha-do-tempo.mp3", duration: "3:36" },
    { id: "single-02", title: "Afterglow", artist: "Neon Fields", year: 2026, cover: "assets/covers/demo-2.svg", audio: "assets/audio/afterglow.mp3", duration: "3:44" }
  ]
};