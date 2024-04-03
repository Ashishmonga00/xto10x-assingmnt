import WindowIcon from "@mui/icons-material/Window";
import LanguageIcon from "@mui/icons-material/Language";
export default function GameCard({ game }) {
  return (
    <>
      <div className="gameCard">
        <img src={game.thumbnail} className="thumbnail" />
        <div
          style={{
            padding: ".5rem",
          }}
        >
          <h3>{game.title}</h3>
          <p className="description">{game.short_description}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="genreContainer">
              <div>{game.genre}</div>
            </div>
            <div>
              {game.platform === "Web Browser" ? (
                <LanguageIcon />
              ) : (
                <WindowIcon />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
