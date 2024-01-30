import './app-logo.css';

const AppLogo = () => {
    return (
        <div className="app-logo">
                <div className="conteinerScreen">
                    <img src="img/firstScreen.jpg" className="mainImage" alt="mainImage"/>
                    <div className="imgDescription">
                        <li className="logoText1">
                            Looking For A Professional Moving <br/>
                            Company in Chicago, IL?</li>
                        <li className="logoText2">
                            Alliance Moving & Storage is a family-operated moving company <br/>
                            based in Rolling Meadows. Our mission is to provide professional, <br/>
                            affordable, and reliable moving solutions for residential and <br/>
                            commercial needs in the Chicagoland area.</li>
                    </div>
                </div>
        </div>
        
    )
}

export default AppLogo;