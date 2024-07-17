import {
  Box
} from "@mui/material";
import "./App.css";
import DialogComponent from "./DialogComponent";
import CardComponent from "./CardComponent";

function App() {

  return (
    <Box className="App">
      <div>
        <ul className="CompanyInfo">
          <li className="Name">Company Name</li>
          <li className="Production">Production</li>
        </ul>
      </div>
      <DialogComponent />
      <CardComponent />
    </Box>
  );
}

export default App;
