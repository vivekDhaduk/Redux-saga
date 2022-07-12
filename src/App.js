import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getcatsfetch} from './catState'



function App() {
  const cats = useSelector(state => state.cats.cats)
  const dispetch = useDispatch();

  useEffect(()=>{
    dispetch(getcatsfetch());
  },[dispetch]);
  console.log(cats)
  return (
    <div className="App">
      <h1> CATS GALLERY </h1>
      <p>Images of diffrent species of cats. lots of cats for your pleasure.</p>
      <hr />
      <div className='gallery'>
        {cats.map((cat) => (
          <div key={cat.id} className="row" data-aos="fade-right">
            <div className='column column-left'>
              <img 
              alt={cat.name}
              src={cat.image.url}
              width="200"
              height="200"
              />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
