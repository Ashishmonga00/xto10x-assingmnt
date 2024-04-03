import WindowIcon from '@mui/icons-material/Window';
import LanguageIcon from '@mui/icons-material/Language';
export default function GameCard({game}) {
    return(<>
    <div className="gameCard">
        <img src={game.thumbnail} className="thumbnail"/>
        <div>{game.title}</div>
        <div className="description">{game.short_description}</div>
        <div className="genreContainer">
            <div>{game.genre}</div>
            <div>{game.platform==='Web Browser'? <LanguageIcon/> : <WindowIcon/>  }</div>
        </div>
    </div>
    </>)
}