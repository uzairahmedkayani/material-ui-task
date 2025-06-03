import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import './App.css'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export default function CustomCard(props) {
  return (
    <Card style={{ backgroundColor: "#f7faff", marginBottom: 20 }} container>
      <CardContent>
        <Typography variant="h5">{props.Title}<InfoOutlineIcon /></Typography>
        <Typography variant="body2" color="textSecondary">{props.Desc}</Typography>
        <Typography variant="body1" >
          Price: ${props.Price}
        </Typography>
        <Grid container spacing={1} paddingTop={2}>
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
