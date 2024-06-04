import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CourseList from "./components/CourseList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CourseList></CourseList>
    </>
  );
}

export default App;
