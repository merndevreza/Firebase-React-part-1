import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header/Header";


const Base = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
      </div>
   );
};

export default Base;