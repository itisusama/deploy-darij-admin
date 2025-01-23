import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPages/LoginPage";
import ForgetPasswordPage from "./pages/LoginPages/ForgetPasswordPage";
import ProtectedRoute from "./config/route/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Games from "./pages/Games";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Settings from "./pages/Settings";
import UsersProfile from "./pages/UsersProfile";
import Plan from "./pages/Plan";
import AddPlan from "./pages/AddPlan";
import EditPlan from "./pages/EditPlan";
import PromoCode from "./pages/PromoCode";
import AddPromo from "./pages/AddPromo";
import EditPromo from "./pages/EditPromo";
import AddBanner from "./pages/AddBanner";
import RecentSales from "./pages/RecentSales";
import DetailView from "./pages/DetailView";
import MiniGames from "./pages/MiniGames";
import MiniGameTwo from "./pages/MiniGameTwo";
import MiniGameThree from "./pages/MiniGameThree";
import MiniGameFour from "./pages/MiniGameFour";
import MiniGameFive from "./pages/MiniGameFive";
import EditGameVersion from "./pages/EditGameVersion";
import AddGameVersion from "./pages/AddGameVersion";


import WordLearn from "./pages/WordLearn";
import MiniGameOne from "./pages/MiniGameOne";
import AddNewMiniGameOne from "./pages/AddNewMiniGameOne";
import EditMiniGameOne from "./pages/EditMiniGameOne";
import EditMiniGameFour from "./pages/EditMiniGameFour";
import AddMiniGameFour from "./pages/AddMiniGameFour";
import EditMiniGameThree from "./pages/EditMiniGameThree";
import AddMiniGameThree from "./pages/AddMiniGameThree";
import MiniGameOneList from "./pages/MiniGameOneList";
import ProfessionalVersion from "./pages/ProfessionalVersion";
import EditProfessionalVersion from "./pages/EditProfessionalVersion";
import AddProfessionalVersion from "./pages/AddProfessionalVersion";
import EditWord from "./pages/EditWord";
import AddNewMiniGameFive from "./pages/AddNewMiniGameFive";
import EditNewMiniGameFive from "./pages/EditNewMiniGameFive";
import Notification from "./pages/Notification";
// import ProfessionalVersion from "./components/Games/MiniGameOne/ProfessionalVersion";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/forgot-password" element= {<ForgetPasswordPage />} />
                {/* <Route path="/dashboard" element={<ProtectedRoute component={DashBorad} />} /> */}
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />}/>
                <Route path="/users" element={<ProtectedRoute component={Users} />}/>
                <Route path="/games" element={<ProtectedRoute component={Games} />}/>
                <Route path="/shop" element={<ProtectedRoute component={Shop} />}/>
                <Route path="/learn" element={<ProtectedRoute component={Learn} />}/>
                <Route path="/settings" element={<ProtectedRoute component={Settings} />}/>
                <Route path="/user-profile" element={<ProtectedRoute component={UsersProfile} />}/>
                <Route path="/plan" element={<ProtectedRoute component={Plan} />}/>
                <Route path="/addplan" element={<ProtectedRoute component={AddPlan} />}/>
                <Route path="/editplan" element={<ProtectedRoute component={EditPlan} />}/>
                <Route path="/promo-code" element={<ProtectedRoute component={PromoCode} />}/>
                <Route path="/addpromo" element={<ProtectedRoute component={AddPromo} />}/>
                <Route path="/editpromo" element={<ProtectedRoute component={EditPromo} />}/>
                <Route path="/addbanner" element={<ProtectedRoute component={AddBanner} />}/>
                <Route path="/recent-sales" element={<ProtectedRoute component={RecentSales} />}/>
                <Route path="/detailed-view" element={<ProtectedRoute component={DetailView} />}/>
                <Route path="/mini-games" element={<ProtectedRoute component={MiniGames} />}/>
                <Route path="/mini-game-two" element={<ProtectedRoute component={MiniGameTwo} />}/>
                <Route path="/mini-game-three" element={<ProtectedRoute component={MiniGameThree} />}/>
                <Route path="/mini-game-four" element={<ProtectedRoute component={MiniGameFour} />}/>
                <Route path="/mini-game-five" element={<ProtectedRoute component={MiniGameFive} />}/>
                <Route path="/edit-game-version" element={<ProtectedRoute component={EditGameVersion} />}/>
                <Route path="/add-game-version" element={<ProtectedRoute component={AddGameVersion} />}/>
                <Route path="/word-learn" element={<ProtectedRoute component={WordLearn} />}/>
                <Route path="/detailed-view" element={<ProtectedRoute component={DetailView} />}/>
                <Route path="/mini-game-one" element={<ProtectedRoute component={MiniGameOne} />}/>
                <Route path="/add-new-minigameone" element={<ProtectedRoute component={AddNewMiniGameOne} />}/>
                <Route path="/edit-new-minigameone" element={<ProtectedRoute component={EditMiniGameOne} />}/>
                <Route path="/edit-minigamefour" element={<ProtectedRoute component={EditMiniGameFour} />}/>
                <Route path="/add-minigamefour" element={<ProtectedRoute component={AddMiniGameFour} />}/>
                <Route path="/edit-minigamethree" element={<ProtectedRoute component={EditMiniGameThree} />}/>
                <Route path="/add-minigamethree" element={<ProtectedRoute component={AddMiniGameThree} />}/>
                <Route path="/minigameone-list" element={<ProtectedRoute component={MiniGameOneList} />}/>
                <Route path="/professional-version" element={<ProtectedRoute component={ProfessionalVersion} />}/>
                <Route path="/edit-professional-version" element={<ProtectedRoute component={EditProfessionalVersion} />}/>
                <Route path="/add-professional-version" element={<ProtectedRoute component={AddProfessionalVersion} />}/>
                <Route path="/edit_word" element={<ProtectedRoute component={EditWord} />}/>
                <Route path="/add-new-minigamefive" element={<ProtectedRoute component={AddNewMiniGameFive} />}/>
                <Route path="/edit-new-minigamefive" element={<ProtectedRoute component={EditNewMiniGameFive} />}/>
                <Route path="/notification" element={<ProtectedRoute component={Notification} />}/>
                {/* <Route path="/Games/miniGameOne/ProfessionalVersion" element={<ProfessionalVersion />} /> */}
            </Routes>
        </Router>
    );
};

export default App
