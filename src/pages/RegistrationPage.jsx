import React, { useRef, useState, useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../app/userSlice";


const RegistrationPage = () => {

    const [nameDirty, setNameDirty] = useState(false);
    const [depositDirty, setDepositDirty] = useState(false);
    const [NameError, setNameError] = useState("Required field");
    const [depositError, setDepositError] = useState("Required field");
    const [formValid, setFormValid] = useState(false);

    let nameRafe = useRef();
    let depositRafe = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        if (NameError || depositError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [NameError, depositError])

    const nameHandler = (e) => {
        if (e.target.value.length < 2) {
            setNameError("Too short name")
            if (!e.target.value) {
                setNameError("Required field")
            }
        } else {
            setNameError("");
        }
    }

    const depositHandler = (e) => {
        if (e.target.value < 1) {
            setDepositError("Deposit must be greater than '0'")
            if (!e.target.value) {
                setDepositError("Required field")
            }
        } else {
            setDepositError("");
        }
    }

    const blurHandler = (e) => {
        switch (e.target.type) {
            case "text": setNameDirty(true);
                break;
            case "number": setDepositDirty(true);
                break;
        }
    }

    function addNewUser() {
        dispatch(addUser({
            name: nameRafe.current.value,
            deposit: depositRafe.current.value,
            balance: depositRafe.current.value
        }))
    };


    return (
        <div className="registration-container">
            <div className="registration">
                <div className="logo">
                    <img src={require("../images/logo.png")} alt="logo" />
                </div>
                <form>
                    {(nameDirty && NameError) && <div className="error">{NameError}</div>}
                    <input type="text" onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} ref={nameRafe} placeholder="Ваше ім'я" />
                    {(depositDirty && depositError) && <div className="error">{depositError}</div>}
                    <input type="number" onChange={e => depositHandler(e)} onBlur={e => blurHandler(e)} ref={depositRafe} placeholder="Початковий депозит" min="1" />
                    <Link to="/main">
                        <button disabled={!formValid} className="btn" onClick={addNewUser}>Почати</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
