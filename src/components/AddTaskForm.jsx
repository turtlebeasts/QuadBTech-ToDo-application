import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";

const AddTaskForm = () => {
  const { dispatch } = useTaskContext();
  const [task, setTask] = useState({
    name: "",
    notes: "",
    important: false,
    steps: "",
    reminder: false,
    dueDate: "",
    repeat: false,
    complete: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now().toString(),
      steps: task.steps.split(",").map((step) => step.trim()),
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setTask({
      name: "",
      notes: "",
      important: false,
      steps: "",
      reminder: false,
      dueDate: "",
      repeat: false,
      complete: false,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" component="h2" textAlign="center">
        Add New Task
      </Typography>

      <TextField
        label="Task Name"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        required
        fullWidth
      />

      <TextField
        label="Notes"
        name="notes"
        value={task.notes}
        onChange={handleInputChange}
        multiline
        rows={3}
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={task.important}
            name="important"
            onChange={handleInputChange}
          />
        }
        label="Important"
      />

      <TextField
        label="Steps (comma-separated)"
        name="steps"
        value={task.steps}
        onChange={handleInputChange}
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={task.reminder}
            name="reminder"
            onChange={handleInputChange}
          />
        }
        label="Reminder"
      />

      <TextField
        label="Due Date"
        type="datetime-local"
        name="dueDate"
        value={task.dueDate}
        onChange={handleInputChange}
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={task.repeat}
            name="repeat"
            onChange={handleInputChange}
          />
        }
        label="Repeat"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
