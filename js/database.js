// Catálogo estático da Barriguda Web TV.
// Os MP3 abaixo estão hospedados no repositório público:
// https://github.com/pontodecultura/songs
//
// Para reprodução no navegador, usamos URLs RAW do GitHub,
// e não as URLs /blob/ da página HTML do GitHub.

const RAW_AUDIO_BASE =
  "https://raw.githubusercontent.com/pontodecultura/songs/pontodecultura.github.io/assets/audio/";

const audio = (filename) =>
  RAW_AUDIO_BASE + encodeURIComponent(filename).replace(/%2F/g, "/");

export const DATABASE = {
  app: {
    name: "Barriguda Music",
    version: "1.1.0",
    githubBase: "https://pontodecultura.github.io/songs/",
    defaultVolume: 0.8
  },

  albums: [
    {
      id: "album-barriguda",
      title: "Barriguda Web TV",
      artist: "Barriguda Web TV",
      year: 2026,
      cover: "assets/covers/cover.png",
      tracks: [
        {
          id: "bwtv-fundo",
          title: "Barriguda Web TV [Instrumental] - Fundo",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Barriguda Web TV [Instrumental] - Fundo.mp3")
        },
        {
          id: "bwtv-instrumental",
          title: "Barriguda Web TV [Instrumental]",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Barriguda Web TV [Instrumental].mp3")
        },
        {
          id: "cultura-brasileira",
          title: "Cultura Brasileira",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Cultura Brasileira.mp3")
        },
        {
          id: "equipe-barriguda-1",
          title: "Equipe da Barriguda (1)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Equipe da Barriguda (1).mp3")
        },
        {
          id: "equipe-barriguda",
          title: "Equipe da Barriguda",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Equipe da Barriguda.mp3")
        },
        {
          id: "lenda-brasil",
          title: "Lenda do Brasil",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Lenda do Brasil.mp3")
        },
        {
          id: "uniao-faz-forca",
          title: "União faz a força (Secretaria de Educação)",
          artist: "Secretaria de Educação",
          duration: "",
          audio: audio("União faz a força (Secretaria de Educação).mp3")
        }
      ]
    },
    {
      id: "album-vozes-regionais",
      title: "Vozes Regionais",
      artist: "Barriguda Web TV",
      year: 2026,
      cover: "assets/covers/cover.png",
      tracks: [
        {
          id: "vozes-regionais-1",
          title: "Vozes Regionais (Jingle) (1)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle) (1).mp3")
        },
        {
          id: "vozes-regionais-2",
          title: "Vozes Regionais (Jingle) (2)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle) (2).mp3")
        },
        {
          id: "vozes-regionais",
          title: "Vozes Regionais (Jingle)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle).mp3")
        }
      ]
    }
  ],

  singles: [
  {
      id: "album-barriguda",
      title: "Barriguda Web TV",
      artist: "Barriguda Web TV",
      year: 2026,
      cover: "assets/covers/cover.png",
      tracks: [
        {
          id: "bwtv-fundo",
          title: "Barriguda Web TV [Instrumental] - Fundo",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Barriguda Web TV [Instrumental] - Fundo.mp3")
        },
        {
          id: "bwtv-instrumental",
          title: "Barriguda Web TV [Instrumental]",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Barriguda Web TV [Instrumental].mp3")
        },
        {
          id: "cultura-brasileira",
          title: "Cultura Brasileira",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Cultura Brasileira.mp3")
        },
        {
          id: "equipe-barriguda-1",
          title: "Equipe da Barriguda (1)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Equipe da Barriguda (1).mp3")
        },
        {
          id: "equipe-barriguda",
          title: "Equipe da Barriguda",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Equipe da Barriguda.mp3")
        },
        {
          id: "lenda-brasil",
          title: "Lenda do Brasil",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Lenda do Brasil.mp3")
        },
        {
          id: "uniao-faz-forca",
          title: "União faz a força (Secretaria de Educação)",
          artist: "Secretaria de Educação",
          duration: "",
          audio: audio("União faz a força (Secretaria de Educação).mp3")
        }
      ]
    },
    {
      id: "album-vozes-regionais",
      title: "Vozes Regionais",
      artist: "Barriguda Web TV",
      year: 2026,
      cover: "assets/covers/cover.png",
      tracks: [
        {
          id: "vozes-regionais-1",
          title: "Vozes Regionais (Jingle) (1)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle) (1).mp3")
        },
        {
          id: "vozes-regionais-2",
          title: "Vozes Regionais (Jingle) (2)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle) (2).mp3")
        },
        {
          id: "vozes-regionais",
          title: "Vozes Regionais (Jingle)",
          artist: "Barriguda Web TV",
          duration: "",
          audio: audio("Vozes Regionais (Jingle).mp3")
        }
      ]
    }
    
  ]
};
