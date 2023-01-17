import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAnime } from "../redux/actions";
import { Box, Grid, Typography } from "@mui/material";
import ImgMediaCard from "./Card";
import AnimeReviewCard from "./Card";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnime()).then((data) => setAnimes(data.payload));
    setLoading(false);
  }, [dispatch]);
  console.log(animes);
  return (
    <Box>
      <Typography> List of Animes </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        {loading === false && animes.length > 0 && (
          <Carousel
            sx={{ width: " 100%" }}
            autoPlay={false}
            indicators={false}
            next={(next, active) =>
              console.log(`we left ${active}, and are now at ${next}`)
            }
            prev={(prev, active) =>
              console.log(`we left ${active}, and are now at ${prev}`)
            }
          >
            {animes.map((el) => (
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
                    <AnimeReviewCard
                      name={el.name}
                      image={el.image}
                      description={el.description}
                      rank={el.rank}
                      episodes={el.episodes}
                    />
                  </Grid>

                  <Grid item>
                    <AnimeReviewCard
                      name={el.name}
                      image={el.image}
                      description={el.description}
                      rank={el.rank}
                      episodes={el.episodes}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
    </Box>
  );
};

export default Home;
