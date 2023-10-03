import './index.css';
import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import Pool from './svg/pool.svg';
import Gym from './svg/gym.svg';
import Breakfast from './svg/breakfast.svg';
import Wifi from './svg/wifi.svg';
import Parking from './svg/parking.svg';
import Pets from './svg/pets.svg';
import Airport from './svg/airport.svg';
import Services from './svg/services.svg';
import Room from './svg/room.svg';
import Child from './svg/child.svg';

export default function Comfort({
   pool,
   gym,
   breakfast,
   wifi,
   parking,
   pets,
   airport,
   services,
   room,
   child,
}) {
   return (
      <Box shadow>
         <Heading border space={24}>
            Зручності
         </Heading>

         <ul className="details__list">
            <ListItem imageSrc={Pool} isVisible={pool}>
               <span>Басейн</span>
            </ListItem>
            <ListItem imageSrc={Gym} isVisible={gym}>
               <span>Спортивний зал</span>
            </ListItem>
            <ListItem imageSrc={Breakfast} isVisible={breakfast}>
               <span>Безкоштовний сніданок</span>
            </ListItem>
            <ListItem imageSrc={Wifi} isVisible={wifi}>
               <span>Безкоштовний Wi-F</span>
            </ListItem>
            <ListItem imageSrc={Parking} isVisible={parking}>
               <span>Безкоштовний вуличний паркінг</span>
            </ListItem>
            <ListItem imageSrc={Pets} isVisible={pets}>
               <span>Дозволено розміщення з домашніми тваринами</span>
            </ListItem>
            <ListItem imageSrc={Airport} isVisible={airport}>
               <span>Трансфер до/з аеропорту</span>
            </ListItem>
            <ListItem imageSrc={Services} isVisible={services}>
               <span>Консьєрж-сервіс</span>
            </ListItem>
            <ListItem imageSrc={Room} isVisible={room}>
               <span>Обслуговування номерів</span>
            </ListItem>
            <ListItem imageSrc={Child} isVisible={child}>
               <span>Підходить для дітей</span>
            </ListItem>
         </ul>
      </Box>
   );
}
