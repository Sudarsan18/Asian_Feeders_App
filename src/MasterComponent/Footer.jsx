import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-gray-200">
      <div className=" mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
        <div className="flex items-start justify-around py-20 max-lg:flex-col">
          <div>
            <NavLink to="/">
              <p className="text-[#1c6fc1] font-bold">
                ASIAN <span className="text-[#e6883e]">FEEDERS</span>
              </p>
            </NavLink>
            <div className="mt-4 flex gap-4">
              <a
                // href="https://www.facebook.com/growthlinkindia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlinedIcon className="cursor-pointer text-2xl hover:text-blue-600" />
              </a>
              <a
                // href="https://instagram.com/growth_link_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="cursor-pointer text-2xl hover:text-yellow-600" />
              </a>

              <a
                // href="https://www.linkedin.com/company/growth-link-india"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="cursor-pointer text-2xl hover:hover:text-blue-600" />
              </a>

              <a
                // href="https://x.com/growth_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="cursor-pointer text-2xl hover:hover:text-blue-600" />
              </a>
              <a
                href="https://www.youtube.com/@AsianFeeders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="cursor-pointer text-2xl hover:text-red-600" />
              </a>
            </div>
          </div>
          <div className="flex gap-8 text-sm max-lg:mt-14 max-md:flex-col lg:gap-20">
            <div>
              <div>
                <p className="text-xl font-bold text-gray-800">Company</p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {/* <NavLink to="/">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      Mutual Funds
                    </li>
                  </NavLink> */}
                  <NavLink to="/about-us">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      About Us
                    </li>
                  </NavLink>
                  <NavLink to="/services">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      Services
                    </li>
                  </NavLink>
                  <NavLink to="/contact-us">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      Contact
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
            {/* <div>
            <div>
              <p className="text-xl font-bold text-gray-800">Company</p>
              <ul className="mt-4 flex flex-col gap-1.5">
                <NavLink to="/about-us">
                  <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                    About
                  </li>
                </NavLink>
                <NavLink to="/tools">
                  <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                    Tools
                  </li>
                </NavLink>
                <NavLink href="/testimonial">
                  <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                    Testimonial
                  </li>
                </NavLink>
                <NavLink href="/blog">
                  <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                    Blog
                  </li>
                </NavLink>
              </ul>
            </div>
          </div> */}
            <div>
              <div>
                <p className="text-xl font-bold text-gray-800">Contact Us</p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  <NavLink href="https://wa.me/+97010361660">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      WhatsApp - Instant chat
                    </li>
                  </NavLink>
                  {/* <NavLink href="/book-consultation">
                  <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                    Book convenient time
                  </li>
                </NavLink> */}
                  <NavLink href="mailto:asianfeeders@gmail.com">
                    <li className="cursor-pointer font-medium text-gray-500 hover:text-primary">
                      Email us
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 pb-10 text-center">
          <p className="text-sm font-medium text-gray-950">
            © {new Date().getFullYear()} All rights reserved | With{" "}
            <span className="text-red-500">❤</span> by{" "}
            <span className="cursor-pointer font-semibold hover:text-primary">
              AssianFeeders{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
