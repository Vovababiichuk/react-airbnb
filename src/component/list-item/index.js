import './index.css';

export default function ListItem({ children, imageSrc, title, isVisible=true }) {
   const listItemStyle = {
      display: isVisible ? 'flex' : 'none',
   };

   return (
      <li className='list-item' style={listItemStyle}>
         {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
         <div className='list-item__block'>
            {title && <strong className='list-item__title'>{title}</strong>}
            <div className='list-item__content'>{children}</div>
         </div>
      </li>
   )
}
