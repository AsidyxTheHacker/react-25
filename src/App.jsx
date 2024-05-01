import './App.css'
import Accordion from './Components/Accordion/Accordion.jsx';
import RandomColor from './Components/RandomColor/RandomColor.jsx';
import StarRating from './Components/StarRating/StarRating.jsx';

function App() {

  return (
    <>
      <div className='App'>
        <Accordion />
        <RandomColor />
        <StarRating starNum={10} />
      </div>
    </>
  );
};

export default App;