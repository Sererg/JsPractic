import './app-header.css';


const AppHeader = () => {
    const burgerActive = (burger) => {
        burger.target.classList.toggle('active');
        document.querySelector('.headerText').classList.toggle('open');
    }
    return (
        <div className="app-header">
            <img src="img/Mainicon.png" alt="ALLIANCE MOVING & STORAGE" className="MainIcon"/>
            <nav className="headerText">
                <ul>
                    <li>Local Movers</li>
                    <li>Long Distance</li>
                    <li>Storage</li>
                    <li>About Us</li>
                    <li>Service Area</li>
                </ul>
                <button className="buttonHeaderMobile"> Get a Quote</button>
            </nav>
            <div className="blockNumberAndButton">
                <div className="number">
                    <img src="img/phone.png" alt="Phone" className="phone"/>
                    <p className="HeaderNumberText">847-378-4949</p>
                </div>
                <button className="buttonHeader"> Get a Quote</button>
                <div className="burger" onClick={burgerActive}>
                    <span></span>
            </div>
            </div>
            
        </div>
        
        
    )
}
   


export default AppHeader;