import React from "react";
import Header from "./MasterComponent/Header";
import Footer from "./MasterComponent/Footer";

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <div
        className="relative top-[60px] w-full overflow-auto"
        style={{ height: "calc(100% - 60px)" }}
      >
        <Footer />
      </div>

      {/* <WhatsAppButton message="Hello Growth Link Team !" /> */}
    </div>
  );
};

export default App;
