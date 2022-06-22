import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filter = ({ type, setType }) => {
  return (
    // <div >
    <FormControl className="filter1">
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <FormControlLabel
          value="Mountains"
          control={<Radio />}
          label="Mountains"
        />
        <FormControlLabel value="Lakes" control={<Radio />} label="Lakes" />
        <FormControlLabel
          value="City Tour"
          control={<Radio />}
          label="City Tour"
        />
        <FormControlLabel value="all" control={<Radio />} label="All Tours" />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
    // </div>
  );
};

export default Filter;
