import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Vegetables"
            control={<Radio />}
            label="Vegetables"
          />
          <FormControlLabel
            value="Berries"
            control={<Radio />}
            label="Berries"
          />
          <FormControlLabel value="Fruits" control={<Radio />} label="Fruits" />
          <FormControlLabel value="all" control={<Radio />} label="All Menu" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
