import React from "react";
import { Form } from "react-bootstrap";

const SelectFilter = ({label,options,handleInput}) => {
  return (
    <div className="col-lg-2">
      <label>{label}</label>

      <Form.Select name={label} defaultValue="" onChange={handleInput}>
        <option value="">No Filter</option>
        {options.map((option,index)=>{
          return <option value={option} key={index}>{option}</option>
        })}
      </Form.Select>
    </div>
  );
};

export default SelectFilter;
