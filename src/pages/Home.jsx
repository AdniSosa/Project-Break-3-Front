import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1>Soy Home</h1>
        <Outlet/>
        </>
    )
}

export default Home;