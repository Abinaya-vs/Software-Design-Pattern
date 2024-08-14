import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Why_us from './Pages/Why_us';
import LoginPage from './Pages/LoginPage';
import Signup from './Pages/Signup';
import Buy_page from './Pages/BuyPage';
import Step1 from './Pages/Step1';
import SearchResult from './Pages/SearchResult';
import Category from './Pages/Category';
import Auction from './Pages/Auction';
import TopAuction from './Pages/TopAuction';
import Bookss from './Pages/Bookss';
import AddToCart from './Pages/AddToCart';
import AdminPanel from './Components/AdminPanel';
import Table from './Components/Table';
import Profile from './Components/Profile';
import Checkout from './Pages/Checkout';
import Invoice from './Pages/Invoice';
import PostBook from './Pages/PostBook';
import FictionalBooks from './Pages/FictionalBooks';
import Contact_us from './Pages/Contact_us';
import AdminPage from './Pages/AdminPage';
import WhySellBooks from './Pages/WhySellBooks';
import ProfilePage from './Pages/ProfilePage';
import OrdersPage from './Pages/OrdersPage';
import UserManagementPage from './Pages/UserManagementPage';
import Home2 from './Pages/Home2';
import ImageSliderCard from './Pages/ImageSliderCard';
import Contactuswithoutnav from './Pages/Contactuswithounav';
import Whyuswithoutnav from './Pages/Whyuswihtoutnav';

function App() {
 // const location = useLocation();
 // const hideNavbar = location.pathname === '/LoginPage' || location.pathname === '/Signup' || location.pathname === '/admin' || location.pathname === '/Profile' || location.pathname === '/UserManagementPage' || location.pathname === '/OrdersPage' || location.pathname === '/AdminPage';

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home2/>} />
        <Route path="/Homee" element={<Home />} />
        <Route path="/Why_us" element={<Why_us />} />
        <Route path="/Whyuswithoutnav" element={<Whyuswithoutnav />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Buy_page" element={<Buy_page />} />
        <Route path="/Step1" element={<Step1 />} />
        <Route path="/SearchResult" element={<SearchResult />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Auction" element={<Auction />} />
        <Route path="/TopAuction" element={<TopAuction />} />
        <Route path="/book" element={<Bookss />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/PostBook" element={<PostBook />} />
        <Route path="/FictionalBooks" element={< FictionalBooks/>} />
        <Route path="/Contact_us" element={< Contact_us/>} />
        <Route path="/Contactuswithoutnav" element={< Contactuswithoutnav />} />
        <Route path="/AdminPage" element={< AdminPage/>} />
        <Route path="/WhySellBooks" element={<WhySellBooks/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/OrdersPage" element={<OrdersPage/>} />
        <Route path="/UserManagementPage" element={<UserManagementPage/>} />
        <Route path="/ImageSliderCard" element={<ImageSliderCard/>} />
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
