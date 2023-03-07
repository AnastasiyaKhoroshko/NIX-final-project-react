import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';
import { startAgaine } from '../components/FunStartAgaine'
import { Link } from 'react-router-dom';


const LossPage = () => {
    const userInfo = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="endPage">
            <div className="endPage_text"> {userInfo.name}, ви не змогли подвоїти ваш депозит з {userInfo.deposit + "$"}, можливо наступного разу пощастить</div>
            <Link to={"/"}>
                <button className="btn endPage_button" onClick={() => startAgaine(dispatch)}>Заново</button>
            </Link>
        </div>
    );
}

export default LossPage;
