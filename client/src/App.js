// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Main from "./pages/Main";
// import Adminlogin from "./pages/Adminlogin";
// import Userlogin from "./pages/Userlogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import Userdashboard from "./pages/Userdashboard.js";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//           <Routes>
//           <Route path="/" element={<Main />} />
//             <Route path="/user" element={<Userlogin />} />
//             <Route path="/admin" element={<Adminlogin />} />
//             <Route path="/admindashboard" element={<AdminDashboard />} />
//             <Route path="/userdashboard" element={<Userdashboard />} />
//           </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Adminlogin from "./pages/Adminlogin";
import Userlogin from "./pages/Userlogin";
import AdminDashboard from "./pages/AdminDashboard";
import Userdashboard from "./pages/Userdashboard.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/user" element={<Userlogin />} />
            <Route path="/admin" element={<Adminlogin />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/userdashboard" element={<Userdashboard />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;