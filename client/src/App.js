import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProposalInfo  from "./components/proposalInfo/ProposalInfo";
import Register from "./components/register/Register";
import UpdateProposal from "./components/updatePropsal/UpdateProposal";
import UserHeader from "./components/userHeader/UserHeader";
import UserPage from "./components/userPage/UserPage";
import UserPageListItem from "./components/userPageListItem/UserPageListItem";
import VendorHeader from "./components/vendorHeader/VendorHeader";
import ViewProposal  from "./components/viewProposal/ViewProposal";
import CreateProposal from "./components/createProposal/CreateProposal";
import Login  from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" eelement={<CreateProposal />} />
          <Route path="/ProposalInfo" element={<ProposalInfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/update" element={<UpdateProposal />} />
          <Route path="/UserHeader" element={<UserHeader />} />
          <Route path="/userLanding" element={<UserPage />} />
          <Route path="/UserPageListItem" element={<UserPageListItem />} />
          <Route path="/VendorHeader" element={<VendorHeader />} />
          <Route path="/view" element={<ViewProposal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
