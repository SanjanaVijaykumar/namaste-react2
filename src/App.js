import React, { Suspense } from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/Body";
import BodyNewComponent from "./components/BodyNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/Home";
import AboutComponent from "./components/About";
import CartComponent from "./components/Cart";
import ContactComponent from "./components/Contact";
import ProfileComponent from "./components/Profile";
import SettingsComponent from "./components/Settings";
import MenuCard from "./components/Menu";
import MenuDisplay from "./components/MenuDisplay";
// import Grocery from "./components/Grocery";
import { lazy } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => (
    <div>
        <BrowserRouter>
            <HeaderComponent/>
            {/* <BodyComponent />
            <BodyNewComponent/> */}
            <Routes>
                {/* <Route path="/" element={<BodyComponent/>}/> */}
                {/* <Route path="/" element={<BodyNewComponent/>}/> */}
                {/* ✅ Nested routing for /home and its children */}
                <Route path="/home" element={<BodyComponent />}>
                    <Route path="profile" element={<ProfileComponent />} />
                    <Route path="settings" element={<SettingsComponent />} />
                    <Route path=":id" element={<MenuDisplay />} />
                </Route>
                <Route path="/about" element={<AboutComponent/>}/>
                <Route path="/contact" element={<ContactComponent/>}/>
                <Route path="/cart" element={<CartComponent/>}/>
                <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>}/>
                {/* <Route path="/menu/:id" element={<MenuDisplay/>}/> */}
                <Route path="*" element={<BodyNewComponent/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)