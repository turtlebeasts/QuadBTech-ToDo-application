import { Avatar, Box, Typography } from "@mui/material";

export default function ProfileCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Avatar
        alt="User Profile"
        src="profile_picture.jpg"
        sx={{ width: 200, height: 200 }}
      />
      <Typography sx={{ mt: 2, fontWeight: 700 }}>Hey, ABCD</Typography>
    </Box>
  );
}
