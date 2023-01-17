const axios = require("axios");
const router = require(".");
const { Anime, Score, Comment } = require("../db");

const getAnimes = async () => {
  try {
    let list = await axios
      .get(`https://api.jikan.moe/v4/anime?q=&sfw`)
      .then((res) => res.data.data);

    let Animes = list.map((el, index) => {
      return {
        id: index,
        name: el.titles[0].title,
        description: el.synopsis,
        episodes: el.episodes,
        status: el.status,
        image: el.images.jpg.large_image_url,
        score: el.score,
        rank: el.rank,
      };
    });

    Animes.map(async (anime, index) => {
      let newAnime = await Anime.findByPk(index);
      if (!newAnime) {
        newAnime = await Anime.create({
          name: anime.name,
          description: anime.description,
          image: [anime.image],
          episodes: anime.episodes,
          status: anime.status,
          rank: anime.rank,
        });
      }
      let modelScore = await Score.create({
        mean_score: anime.score,
      });

      await newAnime.setScore(modelScore);
    });

    return Animes;
  } catch (error) {
    console.log(error.message);
  }
};

const getAnimeByName = async (name) => {
  try {
    let result = await axios
      .get(`https://api.jikan.moe/v4/anime?q=${name}&sfw`)
      .then((res) => res.data.data);
    let Scores = [];
    await result.forEach(async (el) => Scores.push(el.score));

    return Scores;
  } catch (error) {
    console.log(error.message);
  }
};

const getCommentsByScore = async () => {
  try {
    let Comments = [
      "I do not recommend it.",
      "You may have fun.",
      "Great, this is one of the best anime.",
    ];
    Comments.map(async (el, index) => {
      await Comment.findOrCreate({
        where: {
          id: index,
          description: el,
        },
      });
    });

    let List = await Comment.findAll();
    return List;
  } catch (error) {
    console.log(error.message);
  }
  return;
};

module.exports = {
  getAnimes,
  getAnimeByName,
  getCommentsByScore,
};
