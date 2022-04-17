export const Button = ({text, onClick}) => (
  <button 
    onClick = { onClick } 
    type = "button" 
    className = 'btn'>
    {text}
  </button>
);