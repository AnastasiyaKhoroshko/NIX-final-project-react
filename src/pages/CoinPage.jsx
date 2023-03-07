import React, { useEffect, useState } from "react";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { addCoinResult } from "../app/coinResultSlice";
import { updateBalance } from "../app/userSlice";
import { useNavigate } from "react-router-dom";
import { addCoinMain } from '../app/gameResultSlice';
import Aside from "../components/Aside";


const CoinPage = () => {
    const userInfo = useSelector(state => state.user);
    const allResultCoin = useSelector(state => state.coinResult);
    const winLossResult = useSelector(state => state.gameResult);
    const dispatch = useDispatch();

    const [result, setResult] = useState("");
    const [balance, setBalance] = useState(userInfo.balance);
    const [winLoss, setWinLoss] = useState(+winLossResult.coins);
    const bet = (+(userInfo.deposit * 0.05).toFixed(2));
    console.log(winLossResult.coins);

    const navigate = useNavigate();

    function coinRandom() {
        return (Math.floor(Math.random() * 2) === 0) ? "Орел" : "Решка";
    };

    function coinResult(name) {
        if (name === coinRandom()) {
            setResult(`${name}: +${bet}$`);
            setBalance(+(+userInfo.balance + (+bet)).toFixed(2));
            setWinLoss(+(+winLoss + bet).toFixed(2));
        } else {
            setResult(`${name}: -${bet}$`);
            setBalance(+(+userInfo.balance - +bet).toFixed(2));
            setWinLoss(+(+winLoss - bet).toFixed(2));
        }
    };

    useEffect(() => {
        dispatch(addCoinResult({
            coin: result,
        }));
        dispatch(updateBalance({
            balance: balance,
        }));
    }, [result, balance]);

    useEffect(() => {
        dispatch(addCoinMain({
            coins: winLoss,
        }));
    }, [winLoss]);

    useEffect(() => {
        if ((userInfo.deposit * 2) <= +userInfo.balance) {
            navigate("/main/congratulation")
        }
        if (+userInfo.balance <= 0) {
            navigate("/main/loss")
        }
    }, [userInfo.balance]);


    return (
        <div className="coinPage">
            <h1>Монетка</h1>
            <div className="coinPage_container">
                <div className="coinPage_rules">
                    <p>Кожен раз коли ви нажимаєте на орел чи решка, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення,  якщо ваш варінт співпав з тим який згенерувала программа то ви подвоюєте ставку якщо ні то втрачаєте списані кошти з балансу. </p>
                    <div className="coinPage_buttons">
                        <button name="heads" className="btn" onClick={(el) => coinResult(el.target.innerText)}>Орел</button>
                        <button name="tails" className="btn" onClick={(el) => coinResult(el.target.innerText)}>Решка</button>
                    </div>
                </div>
                <Aside gameResalt={allResultCoin} />
            </div>
        </div>
    );
}

export default CoinPage;
