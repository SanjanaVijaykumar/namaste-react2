import { Outlet } from "react-router-dom";
const HomeComponent = () => {
    return(
        <div><h1>Home</h1>
        <Outlet/>
        </div>
    )
};

export default HomeComponent;