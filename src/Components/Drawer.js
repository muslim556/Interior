import React from "react";
import { Drawer, List, ListItemButton } from "@mui/material";

export function DrawerLeft({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchor="left"
      id="drawer"
    >
      <List
        style={{
          width: "250px",
          height: "100%",
        }}
      >
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="drawer_btn"
        >
          <a href="/">Desk</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="drawer_btn"
        >
          <a href="/mywork">Bedroom</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="drawer_btn"
        >
          <a href="/sendfeedback">Lighting</a>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setOpen(false);
          }}
          id="drawer_btn"
        >
          <a href="/sendfeedback">Accesories</a>
        </ListItemButton>
      </List>
    </Drawer>
  );
}
