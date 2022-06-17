import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import styles from "../../styles/Navbar.module.css";

export default function RightStart() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/* <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper> */}
            <div>shubham</div>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick("right-start")}>right-start</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
