import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import { Grid, Typography } from "@mui/material";
import RadioGroupYearFilter from "./components/RadioGroupYearFilter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3} lg={1.5} xl={1}>
          <div className="flexMiddle">
            <RadioGroupYearFilter></RadioGroupYearFilter>
          </div>
        </Grid>
        <Grid item xs={9} lg={10.5} xl={11}>
          <Typography
            variant="h2"
            style={{ textAlign: "center", color: "#C8102E", margin: "1rem" }}
          >
            Engineering Courses {new Date().getFullYear()}
          </Typography>
          <CourseList></CourseList>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
