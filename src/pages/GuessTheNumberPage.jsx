import React, { useEffect, useState, useRef } from "react";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { addNumberResult } from "../app/numberResultSlice";
import { updateBalance } from "../app/userSlice";
import { addNumberMain } from '../app/gameResultSlice'
import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside";



const GuessTheNumberPage = () => {
    const userInfo = useSelector(state => state.user);
    const allResultNumber = useSelector(state => state.numberResult);
    const winLossResult = useSelector(state => state.gameResult);
    const dispatch = useDispatch();
    let numberRafe = useRef();

    const [result, setResult] = useState("");
    const [balance, setBalance] = useState(userInfo.balance);
    const [winLoss, setWinLoss] = useState(winLossResult.num);
    const bet = (+(userInfo.deposit * 0.05).toFixed(2));

    const [numberDirty, setNumberDirty] = useState(false);
    const [NumberError, setNumberError] = useState("Required field");
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (NumberError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [NumberError])

    const numberHandler = (e) => {
        if (+e.target.value > 10 || +e.target.value < 1 || !e.target.value) {
            setNumberError("Введіть число від 1 до 10")
        } else {
            setNumberError("");
            setFormValid(true);
        }
    }

    const blurHandler = () => {
        setNumberDirty(true);
    }

    function coinRandom() {
        return (Math.floor((Math.random() * 10) + 1))
    };

    function coinResult() {
        if (+numberRafe.current.value === coinRandom()) {
            setResult(`${numberRafe.current.value}: +${bet * 10}$`);
            setBalance(+(+userInfo.balance + (+bet * 10)).toFixed(2));
            setWinLoss(+(+winLoss + (bet * 10)).toFixed(2));
        } else {
            setResult(`${numberRafe.current.value}: -${bet}$`);
            setBalance(+(+userInfo.balance - +bet).toFixed(2));
            setWinLoss(+(+winLoss - bet).toFixed(2));
        }
        numberRafe.current.value = "";
        setFormValid(false);
    };

    useEffect(() => {
        dispatch(addNumberResult({
            number: result,
        }));
        dispatch(updateBalance({
            balance: balance,
        }));
    }, [result, balance]);

    useEffect(() => {
        dispatch(addNumberMain({
            num: winLoss,
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
        <div className="guessTheNumber">
            <h1>Вгадай число</h1>
            <div className="coinPage_container">
                <div className="coinPage_rules">
                    <p>Кожен раз коли ви клікаєте на кнопку “спробувати”, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 10,  якщо ваш варінт співпав з тим який згенерувала программа то ви отримаєте вдесятеро більше ніж поставили, якщо ні то втрачаєте списані кошти з балансу.  </p>
                    <div className="coinPage_buttons">
                        <div className="coinPage_input">
                            {(numberDirty && NumberError) && <div className="error">{NumberError}</div>}
                            <input type="number" onChange={e => numberHandler(e)} onBlur={() => blurHandler()} ref={numberRafe} placeholder="Введіть число" min="1" max="10" autoFocus />
                        </div>
                        <button disabled={!formValid} className="btn" onClick={() => coinResult()}>Спробувати</button>
                    </div>
                </div>
                <Aside gameResalt={allResultNumber} />
            </div>
        </div>
    );
}

export default GuessTheNumberPage;
