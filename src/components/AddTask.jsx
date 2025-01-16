import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RepeatIcon from "@mui/icons-material/Repeat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddTaskModal from "./AddTaskModal";

export default function AddTask() {
  return (
    <Card>
      <CardContent>
        <Typography>Add A Task</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-around", width: 100 }}
          >
            <NotificationsNoneIcon /> <RepeatIcon /> <CalendarTodayIcon />
          </Box>
          <AddTaskModal />
        </Box>
      </CardContent>
    </Card>
  );
}
