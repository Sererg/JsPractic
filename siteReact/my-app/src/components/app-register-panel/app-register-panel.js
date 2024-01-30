import './app-register-panel.css';

const AppRegisterPanel = () => {
    return (
        <div className="app-register-panel">
            <div className="informationConteiner">
                <div className="contentText">
                    <div className="contentTextSecond">
                        <p className="infoHeaderText">we are local</p>
                        <h2 className="h2">We proudly serve the Chicagoland area</h2>
                    </div>
                    <p className="infoMediumRegisterText">
                        Alliance Moving & Storage is a family-operated moving company based in Rolling Meadows.<br/>
                        Our mission is to provide professional, affordable, and reliable moving
                    </p>
                </div>
                <div className="contactInformation">
                    <div className="block">
                        <img src="img/locationPin.png" className= "locationPin" alt="locationPin" />
                        <p className="contactInformationText">3201 Tollview Drive Rolling Meadows, IL 60008</p>
                    </div>
                    <div className="block">
                        <img src="img/locationPin.png" className= "locationPin" alt="locationPin" />
                        <p className="contactInformationText">4305 N. Lincikn Ave Chicago, IL 60618</p>
                    </div>
                    <div className="block">
                        <img src="img/locationPinRhone.png" className= "locationPin" alt="locationPin" />
                        <p className="contactInformationText">(847) 378-4949</p>
                    </div>
                </div>    
            </div>
                <div className="modalWindow">
                    <p className="modalWindowHeader">Get In Touch</p>
                    <div className="modalWindowText">
                        <div className="inputSpan1">
                            <div className="input1">
                                <p className="titleNamePhoneEmail">Full Name</p>
                                <input className='inputName'/>
                            </div>
                            <div className="input2">
                                <p className="titleNamePhoneEmail">Phone</p>
                                <input className='inputPhone'/>
                            </div>
                        </div>
                        
                        <div className="input3">
                            <p className="titleNamePhoneEmail">Email</p>
                            <input className='inputEmail'/>
                        </div>
                        <div className="input4">
                            <span className="titleNotes">Notes</span>
                            <input className='inputNotes'/>
                        </div>
                    </div>
                    
                    <button className='submitRegister'>Submit</button>
                </div>
        </div>
        
    )
}

export default AppRegisterPanel;