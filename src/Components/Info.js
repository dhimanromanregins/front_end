import { Link } from 'react-router-dom';
import { React, useState } from 'react';

function Info(props) {
    return (
        <>
           <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="header d-flex">
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
            <section className="parent">
                <div className="main-wrapper">
                    <h2 className="text-center">Help us improve SSP Coin</h2>
                    <h4>SSP Coin would like to gather usage data to better understand how our users interact with MetaMask. This data will be used to provide the service, which includes improving the service based on your use.
                    </h4>
                    <h4>SSP Coin will...</h4>
                </div>
                <div className="check-list">
                    <ul>
                        <li>
                            <span><i className="fa fa-check" aria-hidden="true"></i></span>Always allow you to opt-out via Settings
                        </li>
                        <li>
                            <span><i className="fa fa-check" aria-hidden="true"></i></span>Send anonymized click and pageview events
                        </li>
                        <li>
                            <span><i className="fa fa-check" aria-hidden="true"></i></span>A Never collect information we don’t need to provide the service (such as keys, addresses, transaction hashes, or balances)
                        </li>
                        <li>
                            <span className="colr-change"><i className="fa fa-times" aria-hidden="true"></i></span> Never collect your full IP address*
                        </li>
                        <li>
                            <span className="colr-change"><i className="fa fa-times" aria-hidden="true"></i></span> Never sell data. Ever!
                        </li>

                    </ul>
                </div>
                <h4>
                    This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation (EU) 2016/679.
                </h4>
                <h4>
                    * When you use Infura as your default RPC provider in MetaMask, Infura will collect your IP address and your Ethereum wallet address when you send a transaction. We don’t store this information in a way that allows our systems to associate those two pieces of data. For more information on how MetaMask and Infura interact from a data collection perspective, see our update here. For more information on our privacy practices in general, see our Privacy Policy here.
                </h4>
                <div className="wrapper">
                    <form>
                        {/* <div className="terms-use">
                            <input type="checkbox" name="option-1" id="option-1" onChange={handleCheckBox} /> <label htmlFor="option-1">I agree to SSP Wallet's <span >Terms of use</span></label>
                        </div> */}
                        <div className="center">
                            <Link className="agree-btn" type="button" to={props.pageUrl}>
                                I agree
                            </Link>
                        </div>
                        <div className="center">
                            <Link className="thanks-btn" to={props.pageUrl} type="button">
                                No thanks
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
       
    );
}
export default Info;