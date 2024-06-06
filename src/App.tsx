import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import { Grid, Typography, styled } from "@mui/material";
import RadioGroupYearFilter from "./components/RadioGroupYearFilter";

const Title = styled(Typography) `
  white-space: nowrap;
  margin: 1rem;
  color: #A6192E;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

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
        <Grid item xs={2.5} lg={1.5} xl={1}>
          <div className="flexMiddle">
            <RadioGroupYearFilter
              onClickYear2={onClickYear2}
              onClickYear3={onClickYear3}
              onClickYear4={onClickYear4}
              onClickAll={onClickAll}
            ></RadioGroupYearFilter>
          </div>
        </Grid>
        <Grid item xs={9.5} lg={10.5} xl={11} padding="1rem">
          <Title variant="h2">
            Engineering Courses {new Date().getFullYear()}
          </Title>
          <CourseList year={year}></CourseList>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
