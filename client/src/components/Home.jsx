import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAnime } from "../redux/actions";
import { Box, Grid, Typography } from "@mui/material";
import AnimeReviewCard from "./Card";
import Carousel from "react-material-ui-carousel";
import SearchAppBar from "./NavBar";
import { useSelector } from "react-redux";
import { getAnimeByName } from "../redux/actions";

const Home = () => {
  let animes = useSelector((state) => state.allAnimes);
  const [animes2, setAnimes2] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnime());
    setLoading(false);
  }, [dispatch]);

  const handleClick = async (e, search) => {
    e.preventDefault();
    if (!search) {
      setAnimes2([]);
    }
    dispatch(getAnimeByName(search)).then((data) => {
      setAnimes2(data.payload);
    });
  };

  return (
    <Box sx={{ bgcolor: " #3e3e3e" }}>
      <SearchAppBar handleClick={handleClick} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: " #3e3e3e",
        }}
      >
        {" "}
        {loading === false &&
          (animes2.length > 0 ? (
            <Carousel
              sx={{ width: " 100%", bgcolor: " #3e3e3e" }}
              autoPlay={false}
              indicators={false}
              next={(next, active) =>
                console.log(`we left ${active}, and are now at ${next}`)
              }
              prev={(prev, active) =>
                console.log(`we left ${active}, and are now at ${prev}`)
              }
            >
              {animes2.map((el, index) => {
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
                        bgcolor: "3e3e3e",
                      }}
                    >
                      <Grid item>
                        <AnimeReviewCard
                          name={animes2[index % animes2.length].name}
                          image={animes2[index % animes2.length].image}
                          description={
                            animes2[index % animes2.length].description
                          }
                          rank={animes2[index % animes2.length].rank}
                          episodes={animes2[index % animes2.length].episodes}
                        />
                      </Grid>

                      <Grid item>
                        <AnimeReviewCard
                          name={animes2[(index + 1) % animes2.length].name}
                          image={animes2[(index + 1) % animes2.length].image}
                          description={
                            animes2[(index + 1) % animes2.length].description
                          }
                          rank={animes2[(index + 1) % animes2.length].rank}
                          episodes={
                            animes2[(index + 1) % animes2.length].episodes
                          }
                        />
                      </Grid>
                      <Grid item>
                        <AnimeReviewCard
                          name={animes2[(index + 2) % animes2.length].name}
                          image={animes2[(index + 2) % animes2.length].image}
                          description={
                            animes2[(index + 2) % animes2.length].description
                          }
                          rank={animes2[(index + 2) % animes2.length].rank}
                          episodes={
                            animes2[(index + 2) % animes2.length].episodes
                          }
                        />
                      </Grid>

                      <Grid item>
                        <AnimeReviewCard
                          name={animes2[(index + 3) % animes2.length].name}
                          image={animes2[(index + 3) % animes2.length].image}
                          description={
                            animes2[(index + 3) % animes2.length].description
                          }
                          rank={animes2[(index + 3) % animes2.length].rank}
                          episodes={
                            animes2[(index + 3) % animes2.length].episodes
                          }
                        />
                      </Grid>

                      <Grid item>
                        <AnimeReviewCard
                          name={animes2[(index + 4) % animes2.length].name}
                          image={animes2[(index + 4) % animes2.length].image}
                          description={
                            animes2[(index + 4) % animes2.length].description
                          }
                          rank={animes2[(index + 4) % animes2.length].rank}
                          episodes={
                            animes2[(index + 4) % animes2.length].episodes
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Carousel>
          ) : (
            animes.length > 0 && (
              <Carousel
                sx={{ width: " 100%", bgcolor: " #3e3e3e" }}
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
                          bgcolor: "3e3e3e",
                        }}
                      >
                        <Grid item>
                          <AnimeReviewCard
                            name={animes[index % animes.length].name}
                            image={animes[index % animes.length].image}
                            description={
                              animes[index % animes.length].description
                            }
                            rank={animes[index % animes.length].rank}
                            episodes={animes[index % animes.length].episodes}
                          />
                        </Grid>

                        <Grid item>
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
                          />
                        </Grid>
                        <Grid item>
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
                          />
                        </Grid>

                        <Grid item>
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
                          />
                        </Grid>

                        <Grid item>
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
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
              </Carousel>
            )
          ))}
      </Box>
    </Box>
  );
};

export default Home;
