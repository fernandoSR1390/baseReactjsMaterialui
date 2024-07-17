import { Box, Grid } from "@mui/material";
import "./App.css";
import DialogComponent from "./components/DialogComponent";
import CardComponent from "./components/CardComponent";
import SweetAlertCopmponent from "./components/SweetAlertComponet";
import CreditCardsComponent from "./components/CreditCardsComponent";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <div className="App">
            <DialogComponent />
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <div className="App">
            <SweetAlertCopmponent />
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <div className="App">
            <CardComponent />
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <div className="App">
            <ul className="CompanyInfo">
              <li className="Name">Company Name</li>
              <li className="Production">Production</li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <div className="">
            <CreditCardsComponent />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
