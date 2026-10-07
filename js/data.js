class Clip {
  constructor(id, artist, title, duration, views, image) {
    this.id = id;
    this.artist = artist;
    this.title = title;
    this.duration = duration;
    this.views = views;
    this.image = image;
  }
}

const defaultClips = [
  new Clip(
    1,
    "PSY",
    "GANGNAM STYLE",
    252,
    6081278792,
    "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNZCbK5jdh3ENPfdzB3BGNGNwCJg",
  ),
  new Clip(
    2,
    "Stromae",
    "Papaoutai",
    232,
    1268462477,
    "https://i.ytimg.com/vi/oiKj0Z_Xnjc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBW-gZoCdUuHu1beCblFL1zE7VoWA",
  ),
  new Clip(
    3,
    "The Weeknd",
    "Blinding Lights",
    262,
    1069479624,
    "https://i.ytimg.com/vi/4NRXx6U8ABQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCw5hj2BfQ7ZCPYyMHBhj3SiR5AYA",
  ),
  new Clip(
    4,
    "Ed Sheeran",
    "Shape of You",
    263,
    6817504910,
    "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyNhDKz_FSbd7MP8gOwFKaWOeSSQ",
  ),
  new Clip(
    5,
    "Luis Fonsi",
    "Despacito",
    281,
    9136994328,
    "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJdplr8pWTJ-v-mep_PekqpIycAA",
  ),
  new Clip(
    6,
    "Queen",
    "Bohemian Rhapsody",
    359,
    2104428096,
    "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD7zWlakOIEmIAzljdtl75nWHAn9Q",
  ),
];

let clips = JSON.parse(localStorage.getItem("clips"));

if (!clips || clips.length === 0) {
  clips = defaultClips;
  localStorage.setItem("clips", JSON.stringify(clips));
}
