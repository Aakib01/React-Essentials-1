
import img from '../../assets/react-core-concepts.png';
import './Header.css';

const val = ["1","2","3"];

export default function Header() {
    var ran = val[getRandomValue(2)];
    return(
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {ran}Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
}

function getRandomValue(max)
{
  return Math.floor(Math.random() * (max +1)) ;
}