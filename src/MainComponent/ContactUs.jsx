import { Mail, MapPin, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const ContactUs = () => {
  const phoneNumber = "+917010361660";
  const email = "asianfeeders@gmail.com";
  const message = "Hello Asian Feeders Team !";
  const mapLink =
    "https://www.google.com/maps/place/Palavanthangal/@12.9901151,80.1845195,17.14z/data=!4m14!1m7!3m6!1s0x3a5260aadd0ffff7:0xeaa5044ed18c1f57!2sPalavanthangal!8m2!3d12.9901799!4d80.1868166!16s%2Fg%2F1tgcwh0y!3m5!1s0x3a5260aadd0ffff7:0xeaa5044ed18c1f57!8m2!3d12.9901799!4d80.1868166!16s%2Fg%2F1tgcwh0y?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D";
  const address1 =
    "D.No. 13B/4, SF.No.2/387, ST-1, South Garden, Near cardwell spinning mills, sengalipalayam, Coimbatore - 641022";

  return (
    <div className="mx-auto max-w-screen-2xl px-5 md:px-10 lg:px-20">
      <div className="grid min-h-[620px] w-full grid-cols-6 flex-row pb-10 pt-14 md:py-12 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center max-lg:order-2 max-lg:mt-10">
          <p className="text-3xl lg:text-5xl text-[#1c6fc1] font-bold">
            Contact Us
          </p>
          <div className="hidden lg:block">
            <div className="mb-10 items-start text-justify md:mt-4 shadow-xl p-4 rounded-lg bg-slate-100 font-medium md:w-[500px] grid grid-cols-3 gap-3 transform transition duration-300 hover:scale-110">
              <div className="flex gap-3 items-center ">
                <PhoneCall size={23} color="#e6873c" />
                <p className="hidden lg:block">Phone Number</p>
              </div>
              <div className="col-span-2 mt-[2px] flex">
                <span className="hidden lg:block">:</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {phoneNumber}
                </a>{" "}
              </div>
              <div className="flex gap-3 items-center">
                <WhatsAppIcon htmlColor="#e6873c" />
                <p className="hidden lg:block">WhatsApp</p>
              </div>
              <div className="col-span-2 mt-[2px] flex">
                <span className="hidden lg:block">:</span>
                <a
                  className="hover:text-[#1c6fc1] hover:underline"
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phoneNumber}
                </a>{" "}
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={23} color="#e6873c" />
                <p className="hidden lg:block">Email</p>
              </div>
              <div className="col-span-2 mt-[2px] flex">
                <span className="hidden lg:block">:</span>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {email}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MapPin size={25} color="#e6873c" />
                <p className="hidden lg:block">Address</p>
              </div>
              <div className="col-span-2 mt-[2px]">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {address1}
                </a>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="mb-10 mt-2.5 items-start text-justify shadow-xl p-4 rounded-lg bg-slate-100 font-medium flex flex-col gap-5 transform transition duration-300 hover:scale-110">
              <div className="flex gap-3">
                <PhoneCall size={23} color="#e6873c" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex gap-3">
                {" "}
                <WhatsAppIcon htmlColor="#e6873c" />{" "}
                <a
                  className="hover:text-[#1c6fc1] hover:underline"
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={23} color="#e6873c" />{" "}
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {email}
                </a>
              </div>
              <div className="flex gap-3">
                {" "}
                <MapPin size={50} color="#e6873c" />
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1c6fc1] hover:underline"
                >
                  {address1}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-6 mx-auto flex size-84 items-center justify-center max-lg:order-1 lg:w-[560px] lg:h-[500px]">
          <img src={"/Assets/contact_us.png"} alt="why_mutual_funds"></img>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
