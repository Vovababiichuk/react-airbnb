import './index.css';

export default function Heading({ children, border, space }) {
   const headingStyle = {
      marginBottom: space ? `${space}px` : 0,
   };

   return (
      <span className={`heading ${border ? 'heading--border' : ''}`} style={headingStyle}>
         {children}
      </span>
   );
}
