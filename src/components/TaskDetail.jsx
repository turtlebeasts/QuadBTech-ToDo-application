import {
  Box,
  Breadcrumbs,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function TaskDetail({
  task,
  toggleComplete,
  toggleImportant,
  deleteTask,
}) {
  console.log(deleteTask);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          columnGap: 2,
        }}
      >
        <Checkbox
          onChange={() => toggleComplete(task.id)}
          defaultChecked={task.complete}
        />
        <Box sx={{ pt: 1 }}>
          <Typography
            sx={{ textDecoration: task.complete ? "line-through" : "" }}
          >
            {task.name}
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
            {task.dueDate}
          </Typography>
          {task.steps.length > 0 ? (
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {task.steps.map((item, key) => (
                <Typography key={key}>{item}</Typography>
              ))}
            </Breadcrumbs>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          checked={task.important || false}
          onChange={() => toggleImportant(task.id)}
        />
        <IconButton aria-label="delete" onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
