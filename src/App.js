import React from "react";
import Header from "./MasterComponent/Header";
import Footer from "./MasterComponent/Footer";
import Routing from "./MasterComponent/Routing";
import WhatsAppButton from "./MasterComponent/WhatsAppButton";

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <div
        className="relative top-[111px] w-full overflow-auto"
        style={{ height: "calc(100% - 60px)" }}
      >
        <Routing />
        <Footer />
      </div>
      <WhatsAppButton message="Hello Asian Feeders Team !" />
    </div>
  );
};

export default App;
