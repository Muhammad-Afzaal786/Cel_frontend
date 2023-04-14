import React from "react";
import { Switch } from "antd";
import styles from "./ToggleButton.module.scss";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const ToggleButton = ({checked}) => {
  return (
    <div>
      <Switch defaultChecked={checked} onChange={onChange} />
    </div>
  );
};

export default ToggleButton;
