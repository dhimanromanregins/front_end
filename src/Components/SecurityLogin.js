import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function SecurityLogin(props) {
    let [userPhrases, setUserPhrases] = useState([]);
    const showHide = (e) => {
        e.preventDefault();
        e.target.classList.toggle("toggle-password");
        if (e.target.innerText === 'visibility') {
            e.target.innerText = 'visibility_off';
        }
        else {
            e.target.innerText = 'visibility';
        }
        let input = e.target.closest('.MuiFormControl-root').querySelector('.jss12');
        if (input.getAttribute("type") === "password") {
            input.setAttribute("type", "text");
        }
        else {
            input.setAttribute("type", "password");
        }
    }

    const loginWithPhase = async ()=>{
        if (!userPhrases){
            return;
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({secret_phrases: userPhrases})
        }
        let response = await fetch('http://127.0.0.1:8000/api/login/', options);
        let result = await response.json();
    }

    const getUserPhrases = async ()=>{
        document.getElementsByClassName('wrong-user')[0].style.display = 'none';
        let username = document.getElementById('username').value;
        if (username === ''){
            return;
        }
        let response = await fetch(`http://127.0.0.1:8000/api/secret-phrases/${username}/`);
        let result = await response.json();
        if (result.secret_phrases){
            let userPhrases = [];
            document.getElementById('username').setAttribute('disabled', 'disabled');
            for (let phrase of result.secret_phrases){
                userPhrases.push(phrase);
            }
            setUserPhrases(userPhrases);
            let inputs = document.getElementsByClassName('jss12');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].removeAttribute('disabled');
            }
            document.getElementsByClassName('user-verified')[0].style.display = 'revert';
            props.setUsername(username);
        }
        else{
            console.log('error -', result.error);
            document.getElementsByClassName('wrong-user')[0].style.display = 'revert';
        }
    }

    const matchPhrases = (inputs, alert)=>{
        let matchPhrases = true;
        let confirmBTN = document.getElementsByClassName('button-1')[0];
        for (let i = 0; i < userPhrases.length; i++) {
            if (userPhrases[i] !== inputs[i].value) {
                matchPhrases = false;
                confirmBTN.setAttribute('disabled', 'disabled');
                confirmBTN.style.pointerEvents = 'none';
                confirmBTN.style.backgroundColor = '#0376c980';
            }
        }
        if (matchPhrases && inputs.length === 12){
            confirmBTN.removeAttribute('disabled');
            confirmBTN.style.pointerEvents = 'revert';
            confirmBTN.style.backgroundColor = '#0376c9';
            alert.style.display = 'none';
            return
        }
    }

    const checkPhrases = () => {
        let alert = document.getElementsByClassName('mm-banner-alert')[0];
        let inputs = document.getElementsByClassName('jss12');
        let allEmpty = true;
        let invalidError = false;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === ''){
                invalidError = false
                break;
            }
            else{
                invalidError = true;
            }
        }
        if (invalidError){
            document.getElementsByClassName('mm-text')[0].innerText = 'Invalid Secret Recovery Phrase';
        }
        else{
            document.getElementsByClassName('mm-text')[0].innerText = 'Secret Recovery Phrases contain 12';
        }
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value !== ''){
                allEmpty = false;
                break;
            }
            else{
                allEmpty = true;
            }
        }
        if (allEmpty){
            alert.style.display = 'none';
        }
        else{
            alert.style.display = 'flex';
        }
        matchPhrases(inputs, alert);
    }

    const pasteData = (e)=>{
        let copiedData = e.clipboardData.getData('text').split(' ');
        if (copiedData.length < 2){
            return;
        }
        e.preventDefault();
        let inputs = document.getElementsByClassName('jss12');
        let alert = document.getElementsByClassName('mm-banner-alert')[0];
        for (let i = 0; i < copiedData.length; i++){
            inputs[i].value = copiedData[i];
        }
        matchPhrases(inputs, alert);
    }

    return (
        <>
           <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="header d-flex  align-items-center">
<span>
<img src="/SSP-BLOCK-final-logo.png"></img>
</span>
<h4> SSP Wallet</h4>
                    </div>
           
                    </div>
                    <div className="col-lg-6">
{/* <select>
    <option value="language">english
        </option>
        <option value="language">hindi
        </option>
    </select> */}
    <select class="dropdown__select"><option value="am">አማርኛ</option><option value="ar">العربية</option><option value="bg">български</option><option value="bn">বাংলা</option><option value="ca">Català</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">ελληνικά</option><option value="en">English</option><option value="es">Español</option><option value="es_419">Español (Latin America)</option><option value="et">Estonian</option><option value="fa">فارسی</option><option value="fi">Suomi</option><option value="fil">Filipino</option><option value="fr">Français</option><option value="gu">ગુજરાત</option><option value="he">עברית</option><option value="hi">मानक हिन्दी</option><option value="hn">हिन्दी</option><option value="hr">Hrvatski</option><option value="ht">Kreyòl ayisyen</option><option value="hu">Magyar</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="kn">ಕನ್ನಡ</option><option value="ko">한국어</option><option value="lt">Lietuviškai</option><option value="lv">Latvian</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ms">Malay</option><option value="nl">Nederlands</option><option value="no">Norwegian</option><option value="ph">Pilipino</option><option value="pl">Polskie</option><option value="pt">Português</option><option value="pt_BR">Português (Brazillian)</option><option value="pt_PT">Português (European)</option><option value="ro">Limba română</option><option value="ru">Русский</option><option value="sk">Slovenčina</option><option value="sl">Slovenščina</option><option value="sr">српски</option><option value="sv">Svenska</option><option value="sw">Swahili</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="th">ไทย</option><option value="tl">Wikang Tagalog</option><option value="tr">Türkçe</option><option value="uk">Українська мова</option><option value="vi">Tiếng Việt</option><option value="zh_CN">中文(简体)</option><option value="zh_TW">中文(繁體)</option></select>
     </div>
                </div>
 </div>
      
        <div className="main-wrap-content">
            <section className="parent-recovery">
            <div className="box box--margin-bottom-4 box--flex-direction-row">
    <ul className="progressbar">
        <li className="active">Confirm secret recovery phrase</li>
        <li className="bar">Create password</li>
    </ul>
</div>
                <div className="main-wrapper">
                    <h2 className="sub-header text-center fw-size">Access your wallet with your Secret Recovery Phrase
                    </h2>
                    <h4>MetaMask cannot recover your password. We will use your Secret Recovery Phrase to validate your ownership, restore your wallet and set up a new password. First, enter the Secret Recovery Phrase that you were given when you created your wallet.<span>Learn more
                    </span>
                    </h4>
                </div>
                <div>
                    <div className="col-lg-6">
                        <h4 className="secret-recovery">Type your Secret Recovery Phrase</h4>
                    </div>
                    <div className="col-lg-6">
                        <form action="">
                            <select className="phrase" id="phrase" name="cars" disabled>
                                <option value="1">I have a 12-word phrase</option>
                                <option value="2">I have a 15-word phrase</option>
                                <option value="3">I have a 18-word phrase</option>
                                <option value="4">I have a 21-word phrase</option>
                                <option value="5">I have a 24-word phrase</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                   <div className="col-lg-11 form-group width-resize">
                   <input className="form-control" placeholder="username" onBlur={getUserPhrases} type="text" id="username" />
                   <span className='wrong-user'>Username not found.</span>
                   </div>
                   <div className="col-lg-1 p-space">
                   <svg width="45" height="36" className="ft-green-tick user-verified" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
    <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
    <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17"/>
</svg>
                    </div>
               
                        </div>
                <div className="col-lg-12 bg-blue">
                    <h5><i className="fa fa-info-circle " aria-hidden="true"></i> You can paste your entire secret recovery phrase into any field</h5>
                </div>
                <div className="row">
                    <form>
                       
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        1.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        2.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        3.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        4.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        5.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        6.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        7.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        8.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        9.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        10.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        11.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        12.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " disabled type="password" onChange={checkPhrases} onPaste={pasteData} />
                                    <div className="show-hide-toggle">
                                        <span className="field-icon toggle-password" onClick={showHide}>
                                            <span className="material-icons">visibility_off</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                        </div>
                        <div className="mm-box mm-banner-base mm-banner-alert mm-banner-alert--severity-danger import-srp__srp-error mm-box--padding-3 mm-box--padding-left-2 mm-box--display-flex mm-box--gap-2 mm-box--background-color-error-muted mm-box--rounded-sm">
                            <span className="mm-box mm-icon mm-icon--size-lg mm-box--display-inline-block mm-box--color-error-default" style={{ WebkitMaskImage: 'url(danger.svg)' }}>
                            </span>
                            <div>
                                <p className="mm-box mm-text import-srp__banner-alert-text mm-text--body-md mm-box--color-text-default">Secret Recovery Phrases contain 12
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12" >
                                <div className="center">
                                    <Link to="/create-password" className="button-1 center" onClick={loginWithPhase} disabled type="button">
                                        Confirm Secret Recovery Phrase
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </div >  </>
    );
}
export default SecurityLogin;