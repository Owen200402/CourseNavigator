import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import { Grid } from "@mui/material";
import RadioGroupYearFilter from "./components/RadioGroupYearFilter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}  md={3.5} lg={1}>
          <div className="flexMiddle"><RadioGroupYearFilter></RadioGroupYearFilter></div>
        </Grid>
        <Grid item xs={8}  md={8.5} lg={11}>
          <CourseList></CourseList>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
