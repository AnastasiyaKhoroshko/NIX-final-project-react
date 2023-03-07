import React, { useEffect, useState } from "react";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { addDoorResult } from "../app/doorResultSlice";
import { addDoorMain } from '../app/gameResultSlice'
import { updateBalance } from "../app/userSlice";
import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside";


const GuessTheDoorPage = () => {
    const userInfo = useSelector(state => state.user);
    const allResultDoor = useSelector(state => state.doorResult);
    const winLossResult = useSelector(state => state.gameResult);
    const dispatch = useDispatch();

    const [result, setResult] = useState("");
    const [balance, setBalance] = useState(userInfo.balance);
    const [winLoss, setWinLoss] = useState(winLossResult.doors);
    const bet = (+(userInfo.deposit * 0.05).toFixed(2));

    const navigate = useNavigate();

    function coinRandom() {
        return (Math.floor((Math.random() * 3) + 1))
    };


    function coinResult(door) {
        if (+door === coinRandom()) {
            setResult(`${door}: +${(bet * 3).toFixed(2)}$`);
            setBalance(+(+userInfo.balance + (+bet * 3)).toFixed(2));
            setWinLoss(+(+winLoss + (bet * 3)).toFixed(2));
        } else {
            setResult(`${door}: -${bet.toFixed(2)}$`);
            setBalance(+(+userInfo.balance - +bet).toFixed(2));
            setWinLoss(+(+winLoss - bet).toFixed(2));
        }
    };

    useEffect(() => {
        dispatch(addDoorResult({
            door: result,
        }));
        dispatch(updateBalance({
            balance: balance,
        }));
    }, [result]);

    useEffect(() => {
        dispatch(addDoorMain({
            doors: winLoss,
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
        <div className="guessTheDoor">
            <h1>Вгадай двері</h1>
            <div className="coinPage_container">
                <div className="coinPage_rules">
                    <p>Кожен раз коли ви клікаєте по одній з дверей, з вашого балансу списується 5% від вашого
                        початкового депозиту, программа генерує випадкове значення від 1 до 3,  якщо ваш варінт
                        співпав з тим який згенерувала программа то ви потроїте ставку якщо ні то втрачаєте
                        списані кошти з балансу.  </p>
                    <div className="guessTheDoor_imgDoor">
                        <div>
                            <img src={require("../images/door10.jpg")} onClick={(el) => coinResult(el.target.alt)} alt="1" />
                        </div>
                        <div>
                            <img src={require("../images/door14.jpg")} onClick={(el) => coinResult(el.target.alt)} alt="2" />
                        </div>
                        <div>
                            <img src={require("../images/door13.jpg")} onClick={(el) => coinResult(el.target.alt)} alt="3" />
                        </div>

                    </div>
                </div>
                <Aside gameResalt={allResultDoor} />
            </div>
        </div>
    );
}

export default GuessTheDoorPage;
