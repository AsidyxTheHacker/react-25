import './App.css'
import Accordion from './Components/Accordion/Accordion.jsx';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import LoadButton from './Components/LoadButton/LoadButton.jsx';
import RandomColor from './Components/RandomColor/RandomColor.jsx';
import StarRating from './Components/StarRating/StarRating.jsx';

function App() {

  return (
    <>
      <div className='App'>
        <Accordion />
        <RandomColor />
        <StarRating starNum={10} />
        <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />
        <LoadButton />
      </div>
    </>
  );
};

export default App;