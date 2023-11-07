import { Link } from 'react-router-dom';

function SecureWallet() {
    return (
        <>
            <div class="main-wrap-content">
                <div class="parent-recovery">
                <div className="box box--margin-bottom-4 box--flex-direction-row">
                    <ul className="progressbar"><li className="active">Create password</li>
                        <li className=" bar">Secure wallet</li>
                        <li className="bar">Confirm secret recovery phrase</li>
                    </ul>
                </div>
                    <div class="main-wrapper">
                        <h2 class="sub-header text-center">Secure your wallet
                        </h2>
                        <h4 class="fw-size-2">Before getting started, watch this short video to learn about your Secret Recovery Phrase and how to keep your wallet safe.
                        </h4>
                    </div>
                    <div class="video-section mm-box--margin-bottom-8">
                    <video width="" height="" controls >
      <source src="https://www.youtube.com/watch?v=-HTubEJ61zU&pp=ygUPbWV0YW1hc2sgd2FsbGV0" type="video/mp4"/>
     </video>
                      
                      
                    </div>
       
                    <div class="secure-wallet-button ">
                       <div className="col-lg-6 mm-box--margin-bottom-8 ">
                       <Link to="/meta-data" className="button-one" >Remind me later (not recommended)</Link>
                        </div> 
                        <div className="col-lg-6 mm-box--margin-bottom-8">
                        <Link to="/user-phrases" className="secure-btn-btn" >Secure my wallet (recommended)</Link>
                        </div>
                       
                    </div>
                    <div>
                        <h3 className="sub-header fw-size">What is a Secret Recovery Phrase?</h3>
                        <h4 className="fw-normal">Your Secret Recovery Phrase is a 12-word phrase that is the “master key” to your wallet and your funds</h4>
                    </div>
                    <div>
                        <h3 className="sub-header fw-size ">
                            How do I save my Secret Recovery Phrase?</h3>
                        <ul className="list  p-0 m-0">
                            <li className=" fw-normal font-li">
                                Save in a password manager

                            </li>
                            <li  className=" fw-normal font-li">
                                Store in a safe deposit box
                            </li>
                            <li className=" fw-normal font-li">

                                Write down and store in multiple secret places
                            </li>
                        </ul>

                       </div>
                       <div>
                        <h3 className="sub-header fw-size">Should I share my Secret Recovery Phrase?</h3>
                        <h4 className="fw-normal">Never, ever share your Secret Recovery Phrase, not even with MetaMask!</h4>
                    </div>
                    <div>
                    <h3 className="sub-header fw-size mm-box--rounded-lg mm-box--padding-4 mm-box--background-color-primary-muted ">If someone asks for your recovery phrase they are likely trying to scam you and steal your wallet funds.</h3>
                    </div>
                </div >
            </div >
        </>
    )
}
export default SecureWallet;