import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "black" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "1%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0% 1%",
          }}
        >
          <IconButton
            sx={{ bgcolor: "white" }}
            onClick={() =>
              window.open("https://github.com/juandalopez117", "_blank")
            }
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{ bgcolor: "white" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/juan-david-piedrahita-l%C3%B3pez-ab9b57b2/",
                "_blank"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "white" }}>
            <MailIcon />
          </IconButton>
        </Toolbar>
        <Typography> Contact me </Typography>
      </AppBar>
    </Box>
  );
}
