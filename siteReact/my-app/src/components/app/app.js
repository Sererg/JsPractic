import AppFooter from '../app-footer/app-footer';
import AppHeader from '../app-header/app-header';
import AppInfo from '../app-info/app-info';
import AppLogo from '../app-logo/app-logo';
import AppMap from '../app-map/app-map';
import AppRecommendations from '../app-recommendations/app-recommendations';
import AppRegisterPanel from '../app-register-panel/app-register-panel';
import './app.css';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
    return (
        <YMaps>
             <div className="app">
                <AppHeader/>
                <AppLogo/>
                <AppInfo/>
                <AppRegisterPanel/>
                <AppMap/>
                <AppRecommendations/>
                <AppFooter/>
            </div>
        </YMaps>
       
    )
}

export default App;

