import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "5px 4px 10px 0px rgba(136, 6, 77, 0.25)",
          }}
        >
          <Toolbar
            sx={{
              pr: 0,
            }}
          >
            <Typography
              mt={0.66666}
              sx={{ flexGrow: 1 }}
              fontSize={20}
              fontWeight={700}
            >
              LOGO
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={"top"}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#F86260",
            color: "white",
            width: "100%",
            boxShadow: "5px 4px 10px 0px rgba(136, 6, 77, 0.25)",
          },
        }}
        ModalProps={{
          BackdropProps: {
            invisible: true,
          },
          slotProps: {
            backdrop: {
              sx: {
                background: "none",
                backdropFilter: "blur(8px)",
              },
            },
          },
        }}
      >
        <Box my={1} mx={2} color={"white"}>
          <MenuList />
        </Box>
      </Drawer>
    </>
  );
}

function MenuList() {
  return (
    <>
      <Box display={"flex"} gap={1} my={1}>
        <Box width={72} height={72} bgcolor={"white"} borderRadius={36}></Box>
        <Box>
          <Typography fontSize={16}>Nombre de usuario</Typography>
          <Typography color={"rgba(255, 255, 255, 0.50)"}>
            Editar perfil
          </Typography>
        </Box>
      </Box>
      <List
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginRight: 3,
              }}
            >
              <HomeIcon
                sx={{
                  color: "white",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{
                fontSize: 20,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginRight: 3,
              }}
            >
              <ShoppingCartIcon
                sx={{
                  color: "white",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Carrito"
              sx={{
                fontSize: 20,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginRight: 3,
              }}
            >
              <LogoutIcon
                sx={{
                  color: "white",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Log out"
              sx={{
                fontSize: 20,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
