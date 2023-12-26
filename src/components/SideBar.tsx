import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideBar() {
  return (
    <Box
      width={288}
      bgcolor={"#F86260"}
      color={"white"}
      padding={4}
      height={"100vh"}
      borderRadius={"0px 20px 20px 0px"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{
        boxShadow: "10px 0px 10px 0px rgba(136, 6, 77, 0.30)",
        display: { xs: "none", lg: "flex" },
      }}
      minWidth={288}
    >
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        <Typography fontSize={30} fontWeight={700}>
          Logo
        </Typography>
        <Box display={"flex"} gap={1}>
          <Box
            display={"flex"}
            gap={1}
            width={72}
            height={72}
            bgcolor={"white"}
            borderRadius={36}
          ></Box>
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
        </List>
      </Box>
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
    </Box>
  );
}
