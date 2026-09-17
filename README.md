# Pulse — Static Music Player

Player musical inspirado em serviços de streaming, desenvolvido somente com **HTML5 + CSS3 + JavaScript ES Modules**, sem backend.

## Arquitetura

O projeto usa **MVC + POO**, com responsabilidades separadas:

- `Model`: `Track`, `Playlist`, `Library`
- `View`: `AppView`
- `Controller`: `AppController`
- `Service`: `CatalogService`, `PlayerService`, `StorageService`
- Configuração/dados: `js/database.js`

O padrão **Service Layer** foi usado para isolar catálogo, reprodução e persistência. Isso mantém o Controller menor e facilita substituir o catálogo estático por uma API no futuro.

## Funcionalidades

- Reprodução de MP3 estático.
- Play/pause, anterior/próxima.
- Barra de progresso e volume.
- Shuffle e repeat.
- Álbuns e singles.
- Busca.
- Favoritos.
- Criação de playlists.
- Adição de músicas às playlists.
- Histórico de músicas recentes.
- Persistência via `localStorage`.
- Interface responsiva para celular, tablet, desktop e TV.
- Capas quadradas.
- Nenhum backend obrigatório.

## Como usar

1. Coloque os MP3 em `assets/audio/`.
2. Coloque as capas em `assets/covers/`.
3. Edite `js/database.js`.
4. Informe `audio` para cada faixa:
   `assets/audio/minha-musica.mp3`
5. Publique a pasta em um repositório GitHub.
6. Ative GitHub Pages.
7. Acesse o `index.html` publicado.

### Arquivos em outro endereço

Também é possível usar uma URL HTTPS diretamente:

```js
audio: "https://exemplo.com/musica.mp3"
```

Para GitHub Pages, normalmente é mais simples manter MP3/capas no próprio repositório.

## Observação importante sobre GitHub

Arquivos muito grandes podem encontrar limitações do GitHub. Para um catálogo grande, considere armazenamento/CDN próprio ou Git LFS conforme o caso. O player continua sendo estático: ele apenas consome URLs acessíveis pelo navegador.

## localStorage

O player salva no navegador:

- playlists;
- favoritos;
- músicas recentes;
- volume.

Os dados são locais ao navegador/dispositivo. Limpar os dados do site ou usar outro dispositivo não leva as playlists junto.

## Estrutura

```text
pulse-static-player/
├── index.html
├── README.md
├── assets/
│   ├── audio/
│   ├── covers/
│   └── icons/
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── database.js
    ├── controllers/
    │   └── AppController.js
    ├── models/
    │   ├── Library.js
    │   ├── Playlist.js
    │   └── Track.js
    ├── services/
    │   ├── CatalogService.js
    │   ├── PlayerService.js
    │   └── StorageService.js
    └── views/
        └── AppView.js
```

## Licença

A estrutura de código pode ser adaptada ao seu projeto. Substitua as capas e músicas de demonstração por conteúdo para o qual você tenha autorização de uso.
