import './index.css';
import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';

export default function Added({
   rules,
   policy,
   local,
   host,
   offers,
   instr
}) {
   return (
      <Box shadow>
         <Heading border space={36}>
            Додаткові властивості
         </Heading>
         <ul className="added__list">
            <ListItem title='Правила дому'>
               <span>{rules}</span>
            </ListItem>
            <ListItem title='Політика скасування'>
               <span>{policy}</span>
            </ListItem>
            <ListItem title='Місцевий транспорт'>
               <span>{local}</span>
            </ListItem>
            <ListItem title='Мови хоста'>
               <span>{host.join(', ')}</span>
            </ListItem>
            <ListItem title='Спеціальні пропозиції:'>
               <span>{offers}</span>
            </ListItem>
            <ListItem title='Інструкції щодо реєстрації'>
               <span>{instr}</span>
            </ListItem>
         </ul>
      </Box>
   );
}
