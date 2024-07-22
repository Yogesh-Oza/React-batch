// jsx

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button, Checkbox, TextField } from "@mui/material";

function App() {
  let name = "yogesh";
  return (
    <div>
      <Navbar />
      <h1>Hello from {name}</h1>
      <p>This is p element</p>
      <Button variant="contained" color="success">
        Submit
      </Button>
      <TextField id="standard-basic" label="Name" variant="standard" />
      <Checkbox label="required" defaultChecked color="success" />
      <Footer />
    </div>
  );
}

export default App;
