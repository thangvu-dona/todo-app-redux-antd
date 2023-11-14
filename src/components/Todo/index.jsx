import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

Todo.propTypes = {
  name: PropTypes.string,
  priority: PropTypes.string,
  completed: PropTypes.bool,
};

export default function Todo({ name = "", priority = "", completed }) {
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
