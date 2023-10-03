import './index.css';
import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import Quests from './svg/quests.svg';
import Bedrooms from './svg/bedroom.svg';
import Bed from './svg/bed.svg';
import Baths from './svg/baths.svg';

export default function Details({ guests, bedrooms, bed, baths }) {
   return (
      <Box shadow>
         <Heading border space={24}>
            Деталі властивості:
         </Heading>

         <ul className="details__list">
            <ListItem imageSrc={Quests}>
               <span>{guests}</span>
               <span>гості</span>
            </ListItem>
            <ListItem imageSrc={Bedrooms}>
               <span>{bedrooms}</span>
               <span>спальня</span>
            </ListItem>
            <ListItem imageSrc={Bed}>
               <span>{bed}</span>
               <span>ліжко</span>
            </ListItem>
            <ListItem imageSrc={Baths}>
               <span>{baths}</span>
               <span>ванна кімната</span>
            </ListItem>
         </ul>
      </Box>
   );
}
