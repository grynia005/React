import React, { useState, useEffect } from "react";

import soloGitare from "./imgMain/solo-gitare.png";
import skullRock from "./imgMain/skull-rock.png";
import kuku from "./imgMain/ku-ku.png";
import the_beatles from "./imgMain/the_beatles.jpg";
import aerosmith from "./imgMain/aerosmith.jpg";
import eagles from "./imgMain/eagles.jpg";
import metallica from "./imgMain/metallica.jpg";
import alt_rock from "./imgMain/alt_rock.png";
import alternative_rock from "./imgMain/alternative_rock.png";
import metal_rock from "./imgMain/metal_rock.png";
import pop_rock from "./imgMain/pop_rock.png";
import post_grange_rock from "./imgMain/post_grange_rock.png";
import punk_rock from "./imgMain/punk_rock.png";
import rock_n_roll from "./imgMain/rock_n_roll.png";
import "./main.css";

const rockStyle = [
  {
    id: 0,
    smileRock: soloGitare,
    nameStyle: "Альтернативний рок",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/watch?v=UKVB3AtTSWg&si=QGeEoxeaA8MlQHiQ",
    count: 0,
  },
  {
    id: 1,
    smileRock: rock_n_roll,
    nameStyle: "Рок-н-рол",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/watch?v=ei0lpmqkTlU&si=-ZDtsA6xk5CLTd8N",
    count: 0,
  },
  {
    id: 2,
    smileRock: metal_rock,
    nameStyle: "Металкор",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/watch?v=SXdZv8HYUs0&si=MYzk-wN55zvrfo1z",
    count: 0,
  },
  {
    id: 3,
    smileRock: alt_rock,
    nameStyle: "Панк-рок",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/playlist?list=PLNddFQD1NSh2QUpAneXGegdzCvhT-_5fn&si=-OgT8Gnf_DQHccr_",
    count: 0,
  },
  {
    id: 4,
    smileRock: pop_rock,
    nameStyle: "Поп-рок",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/playlist?list=PLhk283P75z7g1xQ666HhYYn-ue68s21rG&si=P0cVqUI55-RgM3K7",
    count: 0,
  },
  {
    id: 5,
    smileRock: post_grange_rock,
    nameStyle: "Пост-грандж",
    imgUrl: skullRock,
    styleLink:
      "https://music.youtube.com/watch?v=7iujg2523Mk&si=7mKnVXwQrmWgJfuE",
    count: 0,
  },
];
const rockBand = [
  {
    bandLink: "https://www.thebeatles.com/",
    imageUrl: the_beatles,
    nameBand: "The Beatles",
    id: 0,
    description:
      "Створена в 1960 році The Beatles заклала основи сучасноїпоп- і рок-музики та стала найпопулярнішим гуртом всіх часіві народів",
  },
  {
    bandLink: "https://www.aerosmith.com/",
    imageUrl: aerosmith,
    nameBand: "Aerosmith",
    id: 1,
    description:
      "Гурт Aerosmith був створений в 1970 році. Спочатку вінназивався Jam Band і складався з двох осіб — Джо Перрі іТома Хемілтона",
  },
  {
    bandLink: "https://eagles.com/",
    imageUrl: eagles,
    nameBand: "Eagles",
    id: 2,
    description:
      "У сімдесятих, після виходу Hotel California, слава Eagles прокотилася по всьому світу",
  },
  {
    bandLink: "https://www.metallica.com/",
    imageUrl: metallica,
    nameBand: "Metallica",
    id: 3,
    description:
      "Гурт Metallica Ларс Ульріх і Джеймс Хетфілд заснували у 1981 році. Відтоді музиканти отримали 9 премій Ґреммі та продали понад сто мільйонів примірників своїх альбомів",
  },
];

function Main() {
  return (
    <>
      <section className="rock_music_band">
        <div className="saidbar">
          <h1>The Rock Forever</h1>
          <a
            href="https://music.youtube.com/playlist?list=OLAK5uy_lfrfpHUXM0xPB6yGdyAkgqoQG3m4qwj5U"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Шукаєш ROCK? візьми трішки тут....
          </a>
          <CreateListSaidbar />
        </div>
        <div className="list_rock-band">
          <div className="container">
            <div className="services_cont">
              <h2>Легендарні гурти</h2>
              <CreateListRockBand />
            </div>
          </div>
        </div>
      </section>
      <GetBestEmoticon arr={rockBand} />
    </>
  );
}

function CreateListSaidbar() {
  return (
    <ul className="link_rock_style">
      {rockStyle.map((style) => (
        <li key={style.id}>
          <a
            href={style.styleLink}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <img src={style.imgUrl} alt={style.nameStyle}></img>
          </a>
          <p>{style.nameStyle}</p>
        </li>
      ))}
    </ul>
  );
}

function CreateListRockBand() {
  return (
    <ul className="serv_card">
      {rockBand.map((band) => (
        <li key={band.id}>
          <div className="group">
            <img src={band.imageUrl} className="foto" alt={band.nameBand}></img>
            <a
              href={band.bandLink}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              {band.nameBand}
            </a>
            <p>{band.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Counter({ el, setBestStyle, arrayStyle, setShowTop3 }) {
  const increment = () => {
    const indexOfElement = arrayStyle.findIndex((style) => style.id === el.id);
    arrayStyle[indexOfElement].count = arrayStyle[indexOfElement].count + 1;
    setBestStyle([...arrayStyle]);
    setShowTop3(false)
  };

  return (
    <div>
      <p>Кількість голосів: {el.count}</p>
      <button onClick={increment}>Клікай якщо довподоби</button>
    </div>
  );
}

function GetBestEmoticon() {
  const [bestStyle, setBestStyle] = useState(rockStyle);
  const [showTop3, setShowTop3] = useState(false);

  function getTopStyles(arr) {
    const copyArr = [...arr];
    copyArr.sort(function (a, b) {
      return b.count - a.count;
    });
    copyArr.length = 3;
    return copyArr

  }
  console.log(getTopStyles(bestStyle));
  const handleShowTop3 = () => {

    setShowTop3(true);
  };
  return (
    <section className="count_emodzi">
      <ul className="list_emodzi">
        {rockStyle.map((style) => (
          <li key={style.id}>
            <img src={style.smileRock}></img>
            <h3>{style.nameStyle}</h3>
            <Counter
              el={style}
              setBestStyle={setBestStyle}
              arrayStyle={bestStyle}
              setShowTop3={setShowTop3}
            />
          </li>
        ))}
      </ul>
      <div className="best_style">
        <button onClick={handleShowTop3}>Переглянути ТОП-3</button>
      </div>
      {showTop3 && (
        <ShowBest
          arrayStyle={getTopStyles(bestStyle)}
          setShowTop3={setShowTop3}
        />
      )}
    </section>
  );
}

function ShowBest({ arrayStyle, setShowTop3 }) {
  const handleClick = () => {
    setShowTop3(false);
  };

  return (
    <div className="top_emoticon">
      <ul className="list_top_emoticon">
        {arrayStyle.map((style) => (
          <li key={style.id}>
            <div className="top_3-box">
              <h2>{style.nameStyle}</h2>
              <img src={style.smileRock} alt={style.nameStyle}></img>
              <p>Кількість голосів: {style.count}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="close_btn" onClick={handleClick}>
        Закрити
      </button>
    </div>
  );
}

export { Main };
