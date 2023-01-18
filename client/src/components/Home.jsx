import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAnime, getComments } from "../redux/actions";
import { Box, Grid, Typography } from "@mui/material";
import AnimeReviewCard from "./Card";
import Carousel from "react-material-ui-carousel";
import SearchAppBar from "./NavBar";
import { useSelector } from "react-redux";
import { getAnimeByName } from "../redux/actions";
import Footer from "./footer";
import validate from "./ValidateRank";

const Home = () => {
  let Animes = useSelector((state) => state.allAnimes);
  let Comments = useSelector((state) => state.comments);
  const [animes, setAnimes] = useState([]);
  const [animes2, setAnimes2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState(Comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnime()).then((data) => setAnimes(data.payload));
    dispatch(getComments()).then((data) => setComments(data.payload));
    setLoading(false);
  }, [dispatch]);
  console.log(comments);

  const handleClick = async (e, search) => {
    e.preventDefault();
    if (!search) {
      setAnimes(Animes);
    } else {
      dispatch(getComments()).then((data) => setComments(data.payload));
      dispatch(getAnimeByName(search)).then((data) => {
        setAnimes(data.payload);
      });
    }
  };

  return (
    <Box sx={{}}>
      <SearchAppBar handleClick={handleClick} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          bgcolor: " #001850",
        }}
      >
        {" "}
        {loading === false && animes.length > 0 && (
          <Carousel
            xs={12}
            sm={6}
            sx={{
              width: "100%",
              height: "65vh",
              translate: "0 -6vh",
              zIndex: 1,
              overflow: "hidden",
            }}
            autoPlay={false}
            indicators={false}
            next={(next, active) =>
              console.log(`we left ${active}, and are now at ${next}`)
            }
            prev={(prev, active) =>
              console.log(`we left ${active}, and are now at ${prev}`)
            }
          >
            {animes.map((el, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2%",
                    }}
                  >
                    <Grid item>
                      <Box sx={{}}>
                        <AnimeReviewCard
                          name={animes[index % animes.length].name}
                          image={animes[index % animes.length].image}
                          description={
                            animes[index % animes.length].description
                          }
                          rank={animes[index % animes.length].rank}
                          episodes={animes[index % animes.length].episodes}
                          year={animes[index % animes.length].year}
                          score={animes[index % animes.length].score}
                          comment={
                            animes[index % animes.length].score !== null
                              ? comments[
                                  validate(animes[index % animes.length].score)
                                ].description
                              : "Not ranked"
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box sx={{}}>
                        <AnimeReviewCard
                          name={animes[(index + 1) % animes.length].name}
                          image={animes[(index + 1) % animes.length].image}
                          description={
                            animes[(index + 1) % animes.length].description
                          }
                          rank={animes[(index + 1) % animes.length].rank}
                          episodes={
                            animes[(index + 1) % animes.length].episodes
                          }
                          year={animes[(index + 1) % animes.length].year}
                          score={animes[(index + 1) % animes.length].score}
                          comment={
                            animes[index % animes.length].score !== null
                              ? comments[
                                  validate(animes[index % animes.length].score)
                                ].description
                              : "Not ranked"
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box sx={{}}>
                        <AnimeReviewCard
                          name={animes[(index + 2) % animes.length].name}
                          image={animes[(index + 2) % animes.length].image}
                          description={
                            animes[(index + 2) % animes.length].description
                          }
                          rank={animes[(index + 2) % animes.length].rank}
                          episodes={
                            animes[(index + 2) % animes.length].episodes
                          }
                          year={animes[(index + 2) % animes.length].year}
                          score={animes[(index + 2) % animes.length].score}
                          comment={
                            animes[index % animes.length].score !== null
                              ? comments[
                                  validate(animes[index % animes.length].score)
                                ].description
                              : "Not ranked"
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box sx={{}}>
                        <AnimeReviewCard
                          name={animes[(index + 3) % animes.length].name}
                          image={animes[(index + 3) % animes.length].image}
                          description={
                            animes[(index + 3) % animes.length].description
                          }
                          rank={animes[(index + 3) % animes.length].rank}
                          episodes={
                            animes[(index + 3) % animes.length].episodes
                          }
                          year={animes[(index + 3) % animes.length].year}
                          score={animes[(index + 3) % animes.length].score}
                          comment={
                            animes[index % animes.length].score !== null
                              ? comments[
                                  validate(animes[index % animes.length].score)
                                ].description
                              : "Not ranked"
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box sx={{ height: "auto" }}>
                        <AnimeReviewCard
                          name={animes[(index + 4) % animes.length].name}
                          image={animes[(index + 4) % animes.length].image}
                          description={
                            animes[(index + 4) % animes.length].description
                          }
                          rank={animes[(index + 4) % animes.length].rank}
                          episodes={
                            animes[(index + 4) % animes.length].episodes
                          }
                          year={animes[(index + 4) % animes.length].year}
                          score={animes[(index + 4) % animes.length].score}
                          comment={
                            animes[index % animes.length].score !== null
                              ? comments[
                                  validate(animes[index % animes.length].score)
                                ].description
                              : "Not ranked"
                          }
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Carousel>
        )}
      </Box>

      <Footer sx={{ position: "absolute" }} />
    </Box>
  );
};

export default Home;
