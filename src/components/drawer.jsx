import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <HomeIcon />
        <p>Гланая</p>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <InfoIcon />
        <a href="#secions2">О нас</a>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <AutoStoriesIcon />
        <a href="#secioncours">Курсы</a>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <SupervisedUserCircleIcon />
        <a href="#secionmentors">Преподаватели</a>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <NewspaperIcon />
        <a href="#secionpartner">Блог</a>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <ContactPhoneIcon />
        <a href="#secioncontact">Контакты</a>
      </div>
      <div className="flex items-center gap-[20px] hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
        <ExitToAppIcon />
        <p>Вход</p>
      </div>
    </Box>
  );

  return (
    <div className="flex gap-[10px]">
      <button
        className="hidden sm:block md:block lg:block xl:hidden 2xl:hidden text-white"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
