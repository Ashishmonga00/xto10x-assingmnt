import { useEffect, useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import LanguageIcon from '@mui/icons-material/Language';
import GameCard from './components/GameCard';
import axios from 'axios';
import './App.css';

function App() {
  const [gameList, setGameList] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filteredBy, setFilteredBy] = useState('');

  async function fetchGamesList() {
    try {
      const response = await axios.get('http://localhost:3001/api/games');
      setGameList(response.data);
    } catch (error) {
      console.error('Error fetching game list:', error);
    }
  }

  console.log(gameList);

  function handleFilter(e) {
    setInputText(e.target.value);   
  }



  useEffect(() => {
    fetchGamesList();
  }, []);

  return (
    <>
      <div className="Header">
        <div className="title">
          My Game Store
        </div>
        <div className="inputBox">
          <input type="text" name="Search" id="search" placeholder="Search Any Game" value={inputText} onChange={handleFilter} />
        </div>
      </div>
      <div className='cardsContainer'>
      <div>
        <div onClick={()=>setFilteredBy('PC (Windows)')}>
        <WindowIcon/>
        </div>
        <div onClick={()=>setFilteredBy('Web Browser')}>
        <LanguageIcon/>
        </div>
      </div>
     {gameList.filter((game) => inputText ? game.title.includes(inputText) : true).filter(filteredGames=> 
     filteredBy?filteredGames.platform===filteredBy : true).map(game=>(
        <GameCard game={game} key={game.id}/>
        ))}
        </div>
    </>
  );
}

export default App;
