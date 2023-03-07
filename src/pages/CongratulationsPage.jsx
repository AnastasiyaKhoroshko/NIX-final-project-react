import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';
import { startAgaine } from '../components/FunStartAgaine'
import { Link } from 'react-router-dom';


const CongratulationsPage = () => {
    const userInfo = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="congratulationsPage">
            <div className="endPage_text">Вітаємо {userInfo.name}, ви змогли подвоїти ваш депозит з {userInfo.deposit + "$"} до {userInfo.balance + "$"}</div>
            <Link to={"/"}>
                <button className="btn endPage_button" onClick={() => startAgaine(dispatch)}>Заново</button>
            </Link>
        </div>
    );
}

export default CongratulationsPage
    ;
