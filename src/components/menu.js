import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onglets = [
    { name: "Accueuil", 
      emoji: "squared-up-with-exclamation-mark_1f199.png" 
    },
    {
      name: "À Propos",
      emoji: "man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png",
    },
    { name: "Mes projets", 
      emoji: "personal-computer_1f4bb.png" 
    },
    {
      name: "Me Contacter",
      emoji: "black-nib_2712.png",
    },
  ];

  const ongletsList = onglets.map((onglets) => (
    <ListItemButton sx={{ height: "50px", marginLeft: "20px" }}>
      <img src={onglets.emoji} alt="" width="20px" height="20px" />
      <p>&ensp;&nbsp;{onglets.name}</p>
    </ListItemButton>
  ));

  const list = () => (
    <Box
      sx={{color: "white", backgroundColor: "#181818", width: 220, height: "100%", paddingTop: "20px"}}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      {ongletsList}
    </Box>
  );

  return (
    <div>
      <IconButton sx={{ color: "white" }} onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
