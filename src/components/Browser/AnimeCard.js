import React from 'react';
import "../../scss/elements/_Browser.scss";

const AnimeCard = ({anime}) => {
    return (
        <>
            <div className="browser__anime-card" key={anime.mal_id}>
                <div className="anime-card__image">
                    <img src={anime.images.jpg.image_url} alt={anime.title}/>
                </div>
                <div className="anime-card__title">
                    <h3>{anime.title}</h3>
                </div>

                <div className="anime-card__more hidden">
                    <div className="anime-card__more__info">
                        <p><b>Title:</b> {anime.title}</p>
                        <p><b>Title eng:</b> {anime.title_english}</p>
                        <p><b>Title jap:</b> {anime.title_japanese}</p>
                        <p><b>Type:</b> {anime.type}</p>
                        <p><b>Episodes:</b> {anime.episodes}</p>
                        <p><b>Status:</b> {anime.status}</p>
                        <p><b>Year:</b> {anime.year}</p>
                        <p><b>Season:</b> {anime.season}</p>
                        <p><b>Genres:</b> {anime.genres.map(genre => genre.name + ", ")}</p>
                    </div>
                    <div className="anime-card__more__add-to-list">
                        <button>Add to list</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimeCard;