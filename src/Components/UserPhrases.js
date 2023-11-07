import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';

function UserPhrases() {
    const revealPhrases = (e)=>{
        e.target.style.display = 'none';
        document.getElementsByClassName('user-phrases-next')[0].style.display = 'revert';
        document.getElementsByClassName('hide-show-phrases')[0].style.display = 'revert';
        document.getElementsByClassName('copy-clipboard')[0].style.display = 'revert';
    }
    const showHidePhrases = (e)=>{
        let textContent = e.target.textContent;
        if (textContent.startsWith('Hide')) {
            document.getElementsByClassName('blur-phrases')[0].style.filter = 'blur(5px)';
            e.target.textContent = 'Show seed phrase';
        } 
        else if (textContent.startsWith('Show')) {
            document.getElementsByClassName('blur-phrases')[0].style.filter = 'none';
            e.target.textContent = 'Hide seed phrase';
        }
    }
    const copyPhrases = (e)=>{
        let inputs = document.getElementsByClassName('input-phrase');
        let copyToPhrases = '';
        for (let i = 0; i < inputs.length; i++){
            copyToPhrases = copyToPhrases + `${inputs[i].value} `;
        }
        navigator.clipboard.writeText(copyToPhrases);
        e.target.textContent = 'Copied';
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
                let inputs = document.getElementsByClassName('input-phrase');
                for (let i = 0; i < result.secret_phrases.length; i++) {
                    inputs[i].value = result.secret_phrases[i];
                }
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
                <div className="parent-recovery">
                    <div className="box box--margin-bottom-4 box--flex-direction-row">
                        <ul className="progressbar"><li className="active">Create password</li>
                            <li className=" bar">Secure wallet</li>
                            <li className="bar">Confirm secret recovery phrase</li>
                        </ul>
                    </div>
                    <div className="main-wrapper">
                        <h2 className="sub-header text-center">Write down your Secret <br></br>Recovery Phrase
                        </h2>
                        <h4 className="fw-size-2">Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access..
                        </h4>
                    </div>



                    <div className="margin-bottom-8">
                        <h3 className="sub-header fw-size ">
                            How do I save my Secret Recovery Phrase?</h3>
                        <ul className="list  p-0 m-0">
                            <li className=" fw-normal font-li">
                                Save in a password manager

                            </li>
                            <li className=" fw-normal font-li">
                                Save in a password manager
                            </li>
                            <li className=" fw-normal font-li">

                                Write down and store in multiple secret places

                            </li>
                        </ul>

                    </div>
                    {/* <div className="row border blur-phrases">
                        <div className="col-lg-4 d-flex ">
                            <label>1</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>2</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>3</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>4</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>5</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>6</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>7</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>8</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>9</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>10</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>11</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>12</label>
                            <input className="input-phrase" disabled type="text"></input>
                        </div>
                    </div> */}
                    <div classname="row border ">
                        <form>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        1.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        2.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        3.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        4.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        5.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        6.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        7.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        8.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        9.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        10.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        11.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 col-md-4 ">
                            <div className="import-srp__srp-word">
                                <label>
                                    <p>
                                        12.
                                    </p>
                                </label>
                                <div className="MuiFormControl-root MuiTextField-root d-flex">
                                    <input className="jss12 " type="text" />
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className='phrases-options'>
                        <span className='hide-show-phrases' onClick={showHidePhrases}>Show seed phrase</span><span className='copy-clipboard' onClick={copyPhrases}>Copy to clipboard</span>
                    </div>
                    {/* <div className="recovery-phrase__secret-blocker">
                        <div>
                        <i className="fa fa-eye margin-bottom-8"  aria-hidden="true"></i>
                        </div>
                 
                   <div>
                   <h6 className="mb-6">
                            Make sure nobody is looking</h6>
                   </div>
                       </div> */}
                     
                    <div className="secure-wallet-button pb-8">

                        <div className="col-lg-12 mm-box--margin-bottom-8 text-center">
                            <Link hidden className="user-phrases-next" to="/confirm-phrases">Next</Link>
                            <button className="secure-btn-reveal" onClick={revealPhrases} >Reveal Secret Recovery Phrase</button>
                        </div>

                    </div>

                </div >
            </div >
        </>
    )
}
export default UserPhrases;