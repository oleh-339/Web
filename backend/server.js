const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let clips = [
  {
    id: 1,
    artist: "PSY",
    title: "GANGNAM STYLE",
    duration: 252,
    views: 6081278792,
    image:
      "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNZCbK5jdh3ENPfdzB3BGNGNwCJg",
  },
  {
    id: 2,
    artist: "Stromae",
    title: "Papaoutai",
    duration: 232,
    views: 1268462477,
    image:
      "https://i.ytimg.com/vi/oiKj0Z_Xnjc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBW-gZoCdUuHu1beCblFL1zE7VoWA",
  },
  {
    id: 3,
    artist: "The Weeknd",
    title: "Blinding Lights",
    duration: 262,
    views: 1069479624,
    image:
      "https://i.ytimg.com/vi/4NRXx6U8ABQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCw5hj2BfQ7ZCPYyMHBhj3SiR5AYA",
  },
  {
    id: 4,
    artist: "Ed Sheeran",
    title: "Shape of You",
    duration: 263,
    views: 6817504910,
    image:
      "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyNhDKz_FSbd7MP8gOwFKaWOeSSQ",
  },
  {
    id: 5,
    artist: "Luis Fonsi",
    title: "Despacito",
    duration: 281,
    views: 9136994328,
    image:
      "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJdplr8pWTJ-v-mep_PekqpIycAA",
  },
  {
    id: 6,
    artist: "Queen",
    title: "Bohemian Rhapsody",
    duration: 359,
    views: 2104428096,
    image:
      "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD7zWlakOIEmIAzljdtl75nWHAn9Q",
  },
];

app.get("/api/clips", (req, res) => {
  res.json(clips);
});

app.post("/api/clips", (req, res) => {
  const newClip = { id: Date.now(), ...req.body };
  clips.push(newClip);
  res.status(201).json(newClip);
});

app.put("/api/clips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = clips.findIndex((c) => c.id === id);
  if (index !== -1) {
    clips[index] = { ...clips[index], ...req.body, id };
    res.json(clips[index]);
  } else {
    res.status(404).json({ message: "Clip not found" });
  }
});

app.delete("/api/clips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  clips = clips.filter((c) => c.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
