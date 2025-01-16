import React from "react";
import { useTaskContext } from "../context/TaskContext";
import {
  List,
  ListItem,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

import { useLayoutContext } from "../context/LayoutContext";
import { Grid2 as Grid } from "@mui/material";
import TaskDetail from "./TaskDetail";
import { useFilterContext } from "../context/FilterContext";

const TaskList = () => {
  const { dispatch } = useTaskContext();
  const { layout } = useLayoutContext();
  const { filteredTasks } = useFilterContext();

  const toggleImportant = (taskId) => {
    const updatedTask = filteredTasks.find((task) => task.id === taskId);
    if (updatedTask) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { id: taskId, important: !updatedTask.important },
      });
    }
  };

  const toggleComplete = (taskId) => {
    const updatedTask = filteredTasks.find((task) => task.id === taskId);
    if (updatedTask) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { id: taskId, complete: !updatedTask.complete },
      });
    }
  };

  const deleteTask = (id) => {
    console.log(id);
    if (id) {
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    }
  };

  return (
    <Box>
      {layout === "list" ? (
        <List>
          {filteredTasks.length > 0 ? (
            filteredTasks.map(
              (task) =>
                !task.complete && (
                  <ListItem
                    key={task.id}
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: 2,
                      marginBottom: 1,
                      padding: 2,
                      backgroundColor: "background.paper",
                      boxShadow: 1,
                    }}
                  >
                    <TaskDetail
                      task={task}
                      toggleComplete={toggleComplete}
                      toggleImportant={toggleImportant}
                      deleteTask={deleteTask}
                    />
                  </ListItem>
                )
            )
          ) : (
            <Typography textAlign="center">
              No filtered tasks available.
            </Typography>
          )}
        </List>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {filteredTasks.map(
            (task) =>
              !task.complete && (
                <Grid size={{ xs: 6, md: 3 }} key={task.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TaskDetail
                        task={task}
                        toggleComplete={toggleComplete}
                        toggleImportant={toggleImportant}
                        deleteTask={deleteTask}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      )}

      {filteredTasks.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography>Completed</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {filteredTasks.map(
              (task, key) =>
                task.complete && (
                  <Grid size={12} key={key}>
                    <Card>
                      <CardContent>
                        <TaskDetail
                          task={task}
                          toggleComplete={toggleComplete}
                          toggleImportant={toggleImportant}
                          deleteTask={deleteTask}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                )
            )}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default TaskList;
