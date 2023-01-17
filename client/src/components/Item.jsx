import { Paper, Button } from "@mui/material";

export default function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
