import './index.css';
import Heading from '../heading';

export default function Owner({ name, image, rate, time, info, phone }) {
   return (
      <div className="owner">
         <div className='owner__block'>
            <img src={image} alt={name} className="owner__photo" />
            <div className='owner__content'>
               <Heading space={20}>Господар - {name}</Heading>
               <div className="owner__sub-block">
                  <span className="owner__sub-value">{phone}</span>
                  <span className="owner__sub-value">{time}</span>
                  <span className="owner__sub-value">{rate}% відсотків швидкості відгуку</span>
               </div>
            </div>
         </div>
         <p className='owner__text'>{info}</p>
      </div>
   );
}
