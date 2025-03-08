// import { Home, Route } from 'lucide-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../MainComponent/Home';

const Routing = () => {
    return (
        // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route> */}
    </Routes>
//   </BrowserRouter>
    );
};

export default Routing;