import { Link } from "react-router-dom"
import Header from "./Header";
import { Outlet } from "react-router-dom"

const ComponentWithHeader = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default ComponentWithHeader;