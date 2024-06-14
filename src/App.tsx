import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import RadioGroupYearFilter from "./components/RadioGroupYearFilter";
import CourseFilter from "./components/CourseFilter";
import styled from "@emotion/styled";

const Title = styled(Typography)`
  white-space: nowrap;
  margin: 1rem;
  color: #a6192e;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MyDiv = styled.div`
  @media (max-width: 1420px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [year, setYear] = useState(0);
  const [dept, setDept] = useState<string | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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

  const onSelectDept = (dept: string | null) => {
    setDept(dept);
  };

  return (
    <>
      <Title
        variant="h2"
        style={{ display: !isSmallScreen ? "none" : "block" }}
        className="customed-title"
      >
        Engineering Courses {new Date().getFullYear()}
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={2.5} lg={1.3} xl={1}>
          <div className="flexMiddle">
            <RadioGroupYearFilter
              onClickYear2={onClickYear2}
              onClickYear3={onClickYear3}
              onClickYear4={onClickYear4}
              onClickAll={onClickAll}
            ></RadioGroupYearFilter>
          </div>
        </Grid>
        <Grid item xs={9.5} lg={10.7} xl={11} padding="1rem">
          <Title
            variant="h2"
            style={{ display: isSmallScreen ? "none" : "block" }}
          >
            Engineering Courses {new Date().getFullYear()}
          </Title>
          <Box>
            <MyDiv>
              <CourseFilter onSelectDept={onSelectDept} dept={dept} />
            </MyDiv>
            <CourseList year={year} dept={dept} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
