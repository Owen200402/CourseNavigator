import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const RadioGroupYearFilter = () => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Year</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="year_2"
          name="radio-buttons-group"
        >
          <FormControlLabel value="year_2" control={<Radio />} label="Year 2" />
          <FormControlLabel value="year_3" control={<Radio />} label="Year 3" />
          <FormControlLabel value="Year_4" control={<Radio />} label="Year 4" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupYearFilter;
