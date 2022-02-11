import './App.scss';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './components/loading/Loading';
import CardList from './components/cardList/CardList.jsx';

const App =()=> {

  const url='https://pokeapi.co/api/v2/pokemon/';
  const data=useFetch(url);

  return (
    <div>
      {
        data.loading || !data.datos ? 
      <Loading /> : 
      <CardList data={data} />
      }
      Hello
    </div>
  );
};

export default App;
