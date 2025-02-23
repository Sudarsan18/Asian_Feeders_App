import Logo from "../Assets/Logo.png";
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
    <div className="fixed z-10 w-full bg-[#fff] p-3">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
        <div className="flex h-9 flex-row items-center justify-between xl:p-3 2xl:py-3">
          <div className="md:h-12">
            <NavLink to="/se">
              <img
                src={Logo}
                alt="logo"
                className="mt-1 h-6 w-28 sm:h-10 sm:w-auto"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex lg:gap-3">
            <NavLink href="/">
              <Button
                className="button-text-decor"
                startIcon={<IndianRupee size={15} color="#1976d2" />}
                // {<CurrencyRupeeIcon />}
              >
                Mutual Funds
              </Button>
            </NavLink>

            <NavLink href="/health-insurance">
              <Button
                className="button-text-decor"
                startIcon={<HeartPulse size={16} color="#1976d2" />}
                // {<HealthAndSafetyIcon />}
              >
                Health Insurance
              </Button>
            </NavLink>

            <NavLink href="/term-insurance">
              <Button
                className="button-text-decor"
                startIcon={<HandHeart size={16} color="#1976d2" />}
                // {<VolunteerActivismIcon />}
              >
                Term Insurance
              </Button>
            </NavLink>
            <NavLink href="/about-us">
              <Button
                className="button-text-decor"
                startIcon={<Users size={16} color="#1976d2" />}
                // {<GroupsIcon />}
              >
                About Us
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
            <div
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
            </div>
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
                    startIcon={<IndianRupee size={15} color="#1976d2" />}
                    // {<CurrencyRupeeIcon />}
                  >
                    Mutual Funds
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
                <NavLink to="/health-insurance">
                  <Button
                    className="button-text-decor"
                    startIcon={<HeartPulse size={16} color="#1976d2" />}
                    // {<HealthAndSafetyIcon />}
                  >
                    Health Insurance
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
                <NavLink to="/term-insurance">
                  <Button
                    className="button-text-decor"
                    startIcon={<HandHeart size={16} color="#1976d2" />}
                    // {<VolunteerActivismIcon />}
                  >
                    Term Insurance
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  toggleDrawer(false);
                  setMoreSelected(false);
                }}
              >
                <NavLink to="/about-us">
                  <Button
                    className="button-text-decor"
                    startIcon={<Users size={16} color="#1976d2" />}
                    // {<GroupsIcon />}
                  >
                    About Us
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={() => toggleDrawer(true)}>
                {/* <Link href="/about-us"> */}
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
              </MenuItem>
              {/* </Link> */}
              {moreSelected && (
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
              )}
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
