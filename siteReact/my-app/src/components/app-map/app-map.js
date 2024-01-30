import { Map, Placemark } from '@pbe/react-yandex-maps';
import './app-map.css';

const AppMap = () => (
    <div className='containerMap'>
        <Map width='100%' height={551} defaultState={{ center: [55.751574, 37.573856], zoom: 11 }}>
        <Placemark defaultGeometry={[55.704205, 37.507699]} />
        </Map>
    </div>
);

export default AppMap;