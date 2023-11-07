import { Link } from 'react-router-dom';
import {React, useEffect, useState} from 'react';

function ConfirmPhrases(){
    let [userPhrases, setUserPhrases] = useState([]);
    const checkPhrases = () => {
        let inputs = document.getElementsByClassName('jss12');
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
            return
        }
    }
    useEffect(() => {
        (async function getUserPhrases(){
            let username = localStorage.getItem('username');
            if (!username) {
                return;
            }
            const response = await fetch(`http://127.0.0.1:8000/api/secret-phrases/${username}/`);
            const result = await response.json();
            if (result.secret_phrases) {
                let inputs = document.getElementsByClassName('jss12');
                let userPhrases = [];
                for (let i = 0; i < result.secret_phrases.length; i++) {
                    userPhrases.push(result.secret_phrases[i]);
                    if (i != 3 && i != 5 && i != 7){
                        inputs[i].value = result.secret_phrases[i];
                    }
                }
                setUserPhrases(userPhrases);
            }
        })()
    }, []);
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="header d-flex align-items-center">
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
                    <h1 className="sub-header text-center fw-size">Access your wallet with your Secret Recovery Phrase
                    </h1>
                    <h1 className="sub-header text-center fw-size">Confirm Secret Recovery Phrase
                    </h1>
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <input className="jss12 " type="text" onChange={checkPhrases} />
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
                                    <Link to="/meta-data" className="button-1 center"disabled type="button">
                                        Confirm Secret Recovery Phrase
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </div >
        </>
    )
}
export default ConfirmPhrases;