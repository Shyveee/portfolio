import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemButton } from "@mui/material";

export default function TemporaryDrawer({ scrollToAbout, scrollToTop }) {

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
    {
      name: "Accueuil",
      emoji: "/up.png",
      onClick: scrollToTop
    },
    {
      name: "À Propos",
      emoji: "/raising_hand.png",
      onClick: scrollToAbout
    },
    { name: "Mes projets",
      emoji: "/laptop.png",
      onClick: scrollToAbout
    },
    {
      name: "Me Contacter",
      emoji: "/pencil.png",
      onClick: scrollToAbout
    },
  ];

  const ongletsList = onglets.map((onglet, index) => (
      <ListItemButton
          key={index}
          onClick={onglet.onClick}
          sx={{ height: "50px", marginLeft: "20px" }}
      >
        <img src={onglet.emoji} alt="" width="20px" height="20px" />
        <p>&ensp;&nbsp;{onglet.name}</p>
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
