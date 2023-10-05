import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1750px] font-poppins mx-auto border">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;