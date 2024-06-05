import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import { Grid, Typography } from "@mui/material";
import RadioGroupYearFilter from "./components/RadioGroupYearFilter";

function App() {
  const [year, setYear] = useState(0);

  const onClickYear2 = () => {
    setYear(2);
    console.log("Clicked year 1");
  };

  const onClickYear3 = () => {
    setYear(3);
  };

  const onClickYear4 = () => {
    setYear(4);
  };

  const onClickAll = () => {
    setYear(0);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2.2} lg={1.5} xl={1}>
          <div className="flexMiddle">
            <RadioGroupYearFilter
              onClickYear2={onClickYear2}
              onClickYear3={onClickYear3}
              onClickYear4={onClickYear4}
              onClickAll={onClickAll}
            ></RadioGroupYearFilter>
          </div>
        </Grid>
        <Grid item xs={9.8} lg={10.5} xl={11} padding="1rem">
          <Typography
            variant="h2"
            style={{ textAlign: "center", color: "#A6192E", margin: "1rem" }}
          >
            Engineering Courses {new Date().getFullYear()}
          </Typography>
          <CourseList year={year}></CourseList>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
