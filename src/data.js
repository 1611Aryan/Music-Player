import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const chillHop = {
  data: [
    {
      name: "Sachi Mera Rabb Jaanda",
      cover: "Data/sachiMeraRabbJaanda.jpg",
      artist: "Parth, Cafy Khan, Lakshey",
      audio: "Data/sachiMeraRabbJaanda.mp3",
      color: ["#F58E7A", "#494152"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Dhoke Naal Pyaar",
      cover: "Data/dhokeNaalPyaar.jpg",
      artist: "Parth, Cafy Khan, Lakshey",
      audio: "Data/dhokeNaalPyaar.mp3",
      color: ["#111111", "#4E4E4E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lagda Naa Jeee",
      cover: "Data/lagdaNaaJeee.jpg",
      artist: "Parth, Cafy Khan, Lakshey",
      audio: "Data/lagdaNaaJeee.mp3",
      color: ["#780200", "#F5C0D5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Open For All",
      cover: "Data/openForAll.jpg",
      artist: "Parth, Cafy Khan, Lakshey",
      audio: "Data/openForAll.mp3",
      color: ["#4b4f50", "#878B8C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Pyaar Di Than",
      cover: "Data/pyaarDiThaan.jpg",
      artist: "Parth, Cafy Khan, Lakshey",
      audio: "Data/pyaarDiThaan.mp3",
      color: ["#A89078", "#B0B1B6"],
      id: uuidv4(),
      active: false,
    },
  ],

  addSongs: offset => {
    axios
      .get(
        `https://api.napster.com/v2.2/tracks/top?limit=10&offset=${offset}&apikey=${process.env.REACT_APP_NAPSTER_KEY}`
      )
      .then(res =>
        res.data.tracks.map(track =>
          chillHop.data.push({
            name: track.name,
            cover: `https://direct.rhapsody.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`,
            artist: track.artistName,
            audio: track.previewURL,
            color: ["#F58E7A", "#494152"],
            id: uuidv4(),
            active: false,
          })
        )
      )
      .catch(err => console.log(err));
  },
};

export default chillHop;
