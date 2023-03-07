import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { startAgaine } from './FunStartAgaine'


const Header = () => {
    const userInfo = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <header className="allPartisipants">
            <div className="logo">
                <Link to="/main">
                    <img src={require("../images/logo.png")} alt="logo" />
                </Link>
            </div>
            <div>{userInfo.name}</div>
            <div>Депозит: {userInfo.deposit + "$"}</div>
            <div>Баланс: {userInfo.balance + "$"}</div>
            <div>
                <Link to={"/main"}>
                    <button className="header_btn main_btn btn">Головна</button>
                </Link>
                <Link to={"/"}>
                    <button className="header_btn btn" onClick={() => startAgaine(dispatch)}>Заново</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;