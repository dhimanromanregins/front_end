function MetaData(){
    return (
        <>
   <section>
   <div className="container">
        <div className="main-bg mt-5">
            <div className="header-main">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src="/SSP-BLOCK-final-logo.png" alt="" className="set-imgs"></img>
                        <p className="mainnet ml-2 mb-0">ssp </p>
                    </div>
                    <div>
                  
<button type="button" class="acc-btn" data-toggle="modal" data-target="#exampleModalCenter">
Account 1
<i class="fa fa-angle-down ml-2" aria-hidden="true"></i>


</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <h5 className="text-center an-acc">Select an account</h5>
    <div className="row">
                            <div className="col-md-12">
                                <div className="auto-bg">
<div className="d-flex justify-content-between">
<div className="d-flex ml-2">
    <img src="" alt="" className="set-modal-img"></img>
    <div>
    <h5 className="acc-no">Account 1</h5>
    <p className="pan">0xCC83B...E2cA5</p>
</div>
</div>

<div>
    <p className="eth-class">0 ETH</p>
    <p className="eth-class">$0.00 USD</p>
</div>
</div>
                                </div>
                            </div>
                        </div>
    </div>
  </div>
</div>
                    </div>
                    <div className="left">
                        <p className="mb-0">ji</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 pb-3">
                <button className="into-clr">0x37a1c...5790c</button>
                <h3 className="heading-eth mb-0 mt-4">0 ETH</h3>
                <p className="dollor-shine mb-0">$0.00 USD</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <img src="plus-minus.svg" alt="" className="set-ico"></img>
                    <p className="buy">Buy & sell</p>
                </div>
                <div className="text-center">
                    <img src="arrow-2-up-right.svg" alt="" className="set-ico"></img>
                    <p className="buy">Send</p>
                </div>
                <div className="text-center">
                    <img src="swap-horizontal.svg" alt="" className="set-ico"></img>
                    <p className="buy">Swap</p>
                </div>
                <div className="text-center">
                    <img src="bridge.svg" alt="" className="set-ico"></img>
                    <p className="buy">Bridge</p>
                </div>
                <div className="text-center">
                    <img src="diagram.svg" alt="" className="set-ico"></img>
                    <p className="buy">Portfolio</p>
                </div>
            </div>

            <div className="p-3">
                <ul className="nav nav-tabs space-bet" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">Tokens</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                            aria-controls="profile" aria-selected="false">NFTs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                            aria-controls="contact" aria-selected="false">Activity</a>
                    </li>
                </ul>
                <div className="tab-content p-3" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <div className="ether-img">
                                        <img src="/SSP-BLOCK-final-logo.png" alt="" className="set-tab-img"></img>
                                        {/* <img src="/SSP-BLOCK-final-logo.png" alt="" className="set-tab-imgss"></img> */}

                                    </div>
                                    <div className="zero-th ml-3">
                                        <p className="rum-text mb-0">Ethereum</p>
                                        <p className="grey-text mb-0">0 ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <p className="rum-text">&0.00 <span>USD</span></p>
                            </div>
                            <div className="col-md-12 mt-5">
                                <a className="tokens" href=""><i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                    Import tokens
                                </a>

                            </div>
                            <div className="col-md-12 mt-4">
                                <a className="tokens"  href=""><i className="fa fa-refresh mr-2" aria-hidden="true"></i>
                                    Refresh list
                                </a>
                            </div>
                            <div className="col-md-12 mt-4">
                                <a className="tokens"  href=""><i className="fa fa-question-circle mr-2" aria-hidden="true"></i>
                                    MetaMask support
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auto-bg">
<div className="d-flex">
    <div className="">
<p className="desh mb-0">i</p>
    </div>
    <div className="ml-3">
        <h3 className="auto-tec mb-0">NFT autodetection</h3>
        <p className="detect mb-0">Let MetaMask automatically detect and display NFTs in your wallet.</p>
 <a className="Setti" href="">Turn on NFT detection in Settings</a>
    </div>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
   </section>
 


  
        </>
    )
}

export default MetaData;