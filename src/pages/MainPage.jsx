import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const MainPage = () => {
    const winLossResult = useSelector(state => state.gameResult);

    return (
        <div className="main">
            <div className="main_container">
                <section className="main_chooseGame">
                    <h1>Доступні ігри</h1>
                    <div className="main_chooseGame_rules">Мета гри подвоїти початковий депозит, граючи в ігри</div>
                    <div className="main_chooseGame_games">
                        <Link to="/main/door">
                            <div className="main_chooseGame_gameCard">
                                <p>Вгадай двері</p>
                                <img src={require("../images/door9.jpg")} alt="door" />
                            </div>
                        </Link>
                        <Link to="/main/number">
                            <div className="main_chooseGame_gameCard">
                                <p>Вгадай число</p>
                                <img src={require("../images/num.png")} alt="num" />
                            </div>
                        </Link>
                        <Link to="/main/coin">
                            <div className="main_chooseGame_gameCard">
                                <p>Монетка</p>
                                <img src={require("../images/coins3.jpg")} alt="coin" />
                            </div>
                        </Link>
                    </div>
                </section>
                <aside className="main_aside">
                    <div className="main_aside_out">
                        <span>
                            &lang;
                        </span>
                        <img src={require("../images/кости.svg.png")} alt="coin" />
                    </div>
                    <div className="aside_in">
                        <h2>Результати</h2>
                        <p>Вгадай двері: {winLossResult.doors ? winLossResult.doors + "$" : 0}</p>
                        <p>Вгадай число: {winLossResult.num ? winLossResult.num + "$" : 0}</p>
                        <p>Монетка: {winLossResult.coins ? winLossResult.coins + "$" : 0}</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default MainPage;
