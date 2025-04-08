import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
// import BookFreeConsultation from "./BookFreeConsultation";
import {
  HandHeart,
  HeartPulse,
  IndianRupee,
  SquarePen,
  Users,
  ChevronDown,
  ChevronUp,
  House,
  Settings,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [openHeader, setOpenHeader] = useState(false);
  const [moreSelected, setMoreSelected] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpenHeader(newOpen);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="fixed z-10 w-full bg-[#f1f1f1]">
      <div className="mx-auto max-w-screen-2xl lg:px-5 md:px-10">
        <div className="flex h-24 flex-row items-center justify-between">
          <div className="h-[90px] md:h-24">
            <NavLink to="/">
              <img
                src={"/Assets/Asian_Feeders_logo .png"}
                alt="logo"
                className="h-[5.5rem] w-36 sm:h-[5.5rem] sm:w-auto"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex lg:gap-3">
            <NavLink to="/">
              <Button
                className="button-text-decor"
                htmlColor="#0a64bc"
                startIcon={<House size={15} color="#e6873c" />}
              >
                HOME
              </Button>
            </NavLink>
            <NavLink to="/about-us">
              <Button
                className="button-text-decor"
                startIcon={<Users size={16} color="#e6873c" />}
              >
                About Us
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button
                className="button-text-decor"
                startIcon={<Settings size={16} color="#e6873c" />}
              >
                Services
              </Button>
            </NavLink>

            <NavLink to="/contact-us">
              <Button
                className="button-text-decor"
                startIcon={<PhoneCall size={16} color="#e6873c" />}
              >
                Contact Us
              </Button>
            </NavLink>

            {/* <Button
              endIcon={<ChevronDown size={16} color="#1976d2" />}
              aria-owns={anchorEl ? "basic-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
              className="button-text-decor"
            >
              More
            </Button> */}
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <Link href="/testimonial">
                <MenuItem onClick={handleClose}>
                  <SquarePen size={16} className="mr-4" color="#1976d2" />{" "}
                  Testimony
                </MenuItem>
              </Link>
            </Menu> */}
            {/* <div
              className="menu relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                className="button-text-decor"
                endIcon={<ChevronDown size={16} color="#1976d2" />}
              >
                More
              </Button>
              {isDropdownVisible && <DropdownMenu />}
            </div> */}
            {/* <BookFreeConsultation size={"medium"} /> */}
          </div>
          <div className="block lg:hidden">
            {/* <BookFreeConsultation title="" size={"small"} /> */}
            <IconButton id="basic-button" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Drawer
          open={openHeader}
          anchor="right"
          onClose={() => {
            toggleDrawer(false);
            setMoreSelected(false);
          }}
        >
          <Box sx={{ width: 180 }} role="presentation">
            <List
              id="basic-menu"
              // anchorEl={anchorHeaderEl}
              // open={openHeader}
              // onClose={handleHeaderClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  toggleDrawer(false);
                  setMoreSelected(false);
                }}
              >
                {" "}
                <NavLink to="/">
                  <Button
                    className="button-text-decor"
                    htmlColor="#0a64bc"
                    startIcon={<House size={15} color="#e6873c" />}
                    // {<CurrencyRupeeIcon />}
                  >
                    HOME
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleDrawer(false);
                  setMoreSelected(false);
                }}
              >
                {" "}
                <NavLink to="/about-us">
                  <Button
                    className="button-text-decor"
                    startIcon={<Users size={16} color="#e6873c" />}
                  >
                    About Us
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleDrawer(false);
                  setMoreSelected(false);
                }}
              >
                {" "}
                <NavLink to="/services">
                  <Button
                    className="button-text-decor"
                    startIcon={<Settings size={16} color="#e6873c" />}
                  >
                    Services
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleDrawer(false);
                  setMoreSelected(false);
                }}
              >
                <NavLink to="/contact-us">
                  <Button
                    className="button-text-decor"
                    startIcon={<PhoneCall size={16} color="#e6873c" />}
                  >
                    Contact us
                  </Button>
                </NavLink>
              </MenuItem>
              {/* <MenuItem onClick={() => toggleDrawer(true)}>
                <Button
                  className="button-text-decor"
                  endIcon={
                    moreSelected ? (
                      <ChevronUp size={16} color="#1976d2" />
                    ) : (
                      <ChevronDown size={16} color="#1976d2" />
                    )
                  }
                  onClick={() =>
                    setMoreSelected((moreSelected) => !moreSelected)
                  }
                  // {<GroupsIcon />}
                >
                  More
                </Button>
              </MenuItem> */}
              {/* {moreSelected && (
                <MenuItem
                  onClick={() => {
                    toggleDrawer(false);
                    setMoreSelected(false);
                  }}
                  className="ml-2"
                >
                  {" "}
                  <NavLink to="/testimonial">
                    <Button className="button-text-decor">
                      <SquarePen size={16} className="mr-4" color="#1976d2" />{" "}
                      Testimony
                    </Button>
                  </NavLink>{" "}
                </MenuItem>
              )} */}
            </List>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export const DropdownMenu = () => {
  return (
    <div className="dropdown-menu absolute">
      <ul>
        <li className="p-1">
          <NavLink to="/testimonial">
            {" "}
            <Button
              className="button-text-decor"
              startIcon={<SquarePen size={16} color="#1976d2" />}
            >
              {" "}
              Testimony
            </Button>
          </NavLink>
        </li>
        {/* <li><Button>My account</Button> </li>
        <li><Button>Logout</Button></li> */}
      </ul>
    </div>
  );
};
