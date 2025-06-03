import "./App.css";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={6}>
            <CustomCard Title={"Product 1"} Desc={"Description for Product 1"} Price={29.99} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCard Title={"Product 2"} Desc={"Description for Product 2"} Price={19.99} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCard Title={"Product 3"} Desc={"Description for Product 3"} Price={39.99} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCard Title={"Product 4"} Desc={"Description for Product 4"} Price={49.99} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCard Title={"Product 5"} Desc={"Description for Product 5"} Price={59.99} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCard Title={"Product 6"} Desc={"Description for Product 6"} Price={69.99} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
