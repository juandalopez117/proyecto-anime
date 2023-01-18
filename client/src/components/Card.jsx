import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getComments } from "../redux/actions";
import validate from "./ValidateRank";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2, bgcolor: "#3e3e3e", color: "white" }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function AnimeReviewCard({
  name,
  image,
  description,
  rank,
  episodes,
  year,
  score,
  comment,
}) {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 430,
          bgcolor: "#3e3e3e",
          overflow: "hidden",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          sx={{
            display: "flex",
            overflow: "hidden",
            "& .MuiCardHeader-content": {
              overflow: "hidden",
            },
            color: "white",
          }}
          title={
            <Typography noWrap gutterBottom sx={{ color: "white" }}>
              {name}
            </Typography>
          }
          subheader={`Year: ${year}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Anime"
          sx={{ objectFit: "contain", bgcolor: "white" }}
        />
        <CardContent sx={{ bgcolor: "#3e3e3e", color: "white" }}>
          <Typography variant="body2" color="white">
            Ranking: {rank}
          </Typography>
          <Typography>Episodes: {episodes}</Typography>
          <Typography>score: {score}</Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ margin: "0 auto" }}>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              disableElevation={true}
            >
              Description
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                {name}
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  {description !== null ? description : "None"}
                </Typography>

                <Typography>Comment: {comment}</Typography>
              </DialogContent>
              <DialogActions sx={{ bgcolor: "#3e3e3e", color: "white" }}>
                <Button autoFocus variant="contained" onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
