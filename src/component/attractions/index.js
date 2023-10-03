import './index.css';
import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import { Fragment } from 'react';

export default function Attractions({ list }) {
   return (
      <div className="reviews__block">
         <Box shadow>
            <Heading border space={24}>
               Пам'ятки поблизу
            </Heading>

            <div className="attractions__list">
               {list.map(({ id, ...rest }) => (
                  <Fragment key={id}>
                     <Item {...rest} />
                  </Fragment>
               ))}
            </div>
         </Box>
      </div>
   );
}

function Item({ name, link }) {
   return (
      <ul className="attractions__list">
         <ListItem>
            <a className='attractions__link' href={link}>{name}</a>
         </ListItem>
      </ul>
   );
}
