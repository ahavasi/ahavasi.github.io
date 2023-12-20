import React from "react";
import "./Meme.css";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((meme) => ({
      ...meme,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  return (
    <main className="meme-main">
      <div className="form">
        <input
          className="form--input"
          placeholder="Top Text"
          type="text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          className="form--input"
          placeholder="Bottom Text"
          type="text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
