import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector, todoRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  // const todoList = useSelector((state) => state.todoList); // useSelector to get state on store
  // const todoList = useSelector(todoListSelector); // use selector creator
  const todoList = useSelector(todoRemainingSelector); // use reselect to calculate between list and searchText

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    // dispatch(action)
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    // reset input
    setTodoName("");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
