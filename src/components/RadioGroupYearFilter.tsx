import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const RadioGroupYearFilter = () => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Year</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="show_all"
          name="radio-buttons-group"
        >
          <FormControlLabel value="year_2" control={<Radio />} label="Year 2" />
          <FormControlLabel value="year_3" control={<Radio />} label="Year 3" />
          <FormControlLabel value="year_4" control={<Radio />} label="Year 4" />
          <FormControlLabel value="show_all" control={<Radio />} label="Show All" />

        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupYearFilter;
