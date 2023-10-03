import './index.css';

import Heading from '../heading';
import { Fragment } from 'react';
import Box from '../box';

export default function Reviews({ list }) {
   return <div className='reviews__block'>
      <Heading>Відгуки клієнтів</Heading>

      <div className='reviews__list'>
         {/* ітерується list через map */}
         {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
               <Item {...rest} />
            </Fragment>
         ))}
      </div>
   </div>
}

function Item({ guestName, rating, review }) {
   return (
      <Box>
         <div className='reviews'>
            <span className='reviews__title'>{guestName}</span>
            <span className='reviews__info'>Рейтинг: {rating}</span>
         </div>
         <p className='reviews__text'>{review}</p>
      </Box>
   )
}