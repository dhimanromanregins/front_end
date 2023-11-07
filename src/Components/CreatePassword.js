import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function CreatePassword(props) {
    const handleCheckBox = (event)=>{
        let checkBox = event.target;
        let secureAccount = document.getElementById('secure-btn');
        if (checkBox.checked) {
            secureAccount.style.backgroundColor = '#0376c9';
            secureAccount.style.pointerEvents = 'revert';
            secureAccount.removeAttribute('disabled');
        }
        else{
            secureAccount.style.backgroundColor = '#0376c980';
            secureAccount.setAttribute('disabled', 'disabled');
            secureAccount.style.pointerEvents = 'none';
        }
    }
    const createPassword = async ()=>{
        document.getElementsByClassName('match-password')[0].style.display = 'none';
        document.getElementById('password').nextElementSibling.style.display = 'none';
        document.getElementById('c-password').nextElementSibling.style.display = 'none';
        let username = props.username;
        let password = document.getElementById('password').value;
        let c_password = document.getElementById('c-password').value;
        if (password == '' && c_password == ''){
            document.getElementById('password').nextElementSibling.style.display = 'revert';
            document.getElementById('c-password').nextElementSibling.style.display = 'revert';
            return;
        }
        if (password == ''){
            document.getElementById('password').nextElementSibling.style.display = 'revert';
            return;
        }
        if (c_password == ''){
            document.getElementById('c-password').nextElementSibling.style.display = 'revert';
            return;
        }
        if (password == c_password){
            let data = {
                username: username,
                new_password: password,
            }
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            let response = await fetch('http://127.0.0.1:8000/api/change-password/', options);
            let result = await response.json();
            if (result.message){
                document.getElementsByClassName('secure-wallet')[0].click()
            }
            else{
                document.getElementsByClassName('user-not-found')[0].style.display = 'revert';
                document.getElementsByClassName('user-not-found')[0].textContent = result.error + ', Please try again!';
            }
        }
        else{
            document.getElementsByClassName('match-password')[0].style.display = 'revert';
        }
    }
    return (
        <>
        <section>

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
                <div className="parent-recovery">
                    <div className="box box--margin-bottom-4 box--flex-direction-row">
                        <ul className="progressbar"><li className="active">Create password</li>
                            <li className=" bar">Secure wallet</li>
                            <li className="bar">Confirm secret recovery phrase</li>
                        </ul>
                    </div>
                    <div className="main-wrapper">
                        <h2 className="sub-header text-center">Create password
                        </h2>
                        <h3 className=" text-center">This password will unlock your SSP wallet only on this device. MetaMask can not recover this password.
                        </h3>
                    </div>
                    <div className='text-center'>
                        <span className='user-not-found'></span>
                    </div>
                    <div className="container-fluid space-left">
                        <div className="row-space">
                            <div className=" col-md-10">
                                <div className="form-group form-change">
                                    <h4 className="password fw-bold sub-header">New password (8 characters min)</h4>
                                    <input id="password" className="form-control" type="password" />
                                    <p className="error-text">This Field is required.</p>
                                </div>
                            </div>
                            <div className=" col-md-10">
                                <div className="form-group form-change">
                                    <h4 className="c-password sub-header fw-bold">Confirm password </h4>
                                    {/* <span className="show-hide-password">Show</span> */}
                                    <input id="c-password" className="form-control" type="password" />
                                    <p className="error-text">This Field is required.</p>
                                </div>
                                    <span className='match-password'>Password and Confirm password does not match.</span>
                            </div>

                        </div>
                    </div>
                    <div className="wrapper-one">
                        <form>
                            <div className="terms-use-one">
                                <input type="checkbox" onChange={handleCheckBox} /> <h6 className='font-li fw-normal'>I understand that MetaMask cannot <br></br>recover this password for me. Learn more</h6>
                            </div>

                            <div className="secure-wallet-button pb-8">

<div className="col-lg-12 mm-box--margin-bottom-8 text-center">
    <Link hidden className="secure-wallet" to="/meta-data"></Link>
    <button className="secure-btn" type='button' id="secure-btn" onClick={createPassword} >Reveal Secret Recovery Phrase</button>
</div>

</div>
                        </form>
                    </div>


                </div >
            </div >
            </section>
        </>

    );

}
export default CreatePassword;