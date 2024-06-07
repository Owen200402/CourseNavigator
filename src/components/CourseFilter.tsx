


const CourseFilter = () => {
  return (
    <div className="btn-group dropend m-2">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Department{" "}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a className="dropdown-item" href="#">
            CPEN
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            ELEC
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CourseFilter;
