import React, {useEffect, useState} from 'react';
import "../../scss/elements/_Browser.scss";

const AnimeCard = ({anime}) => {
    const [showInput, setShowInput] = useState(false);
    const [episodesWatched, setEpisodesWatched] = useState(0);
    const [watchingStatus, setWatchingStatus] = useState("currently-watching");

    const handleClickAddAnimeToList = () => {
        setShowInput(true);
    }

    const handleSelectWatchingStatus = (e) => {
        setWatchingStatus(e.target.value);

        if (e.target.value === "completed") {
            setEpisodesWatched(anime.episodes);
        }
    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        const maxEpisodes = anime.episodes;

        if (parseInt(value) <= maxEpisodes) {
            setEpisodesWatched(parseInt(value));
        } else {
            setEpisodesWatched(maxEpisodes);
        }

        if (watchingStatus === "completed" && value < anime.episodes) {
            setWatchingStatus("currently-watching");
        }
    };

    const addAnimeToList = () => {
        const animeToAdd = {
            MALid: anime.mal_id,
            title: anime.title,
            type: anime.type,
            progress: episodesWatched,
            episodes: anime.episodes,
            watchingStatus: watchingStatus
        };

        fetch("http://localhost:3000/animeList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(animeToAdd),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Anime added successfully:", data);
            })
            .catch(error => {
                console.error("Error adding anime:", error);
            });

        setShowInput(false);
        setEpisodesWatched(0);
        setWatchingStatus("");
    };

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
                        <button onClick={handleClickAddAnimeToList}>Add to list</button>
                    </div>
                    {showInput && (
                        <div className="anime-card__more__add-to-list__container">
                            <div>
                                <input
                                    type="number"
                                    min="0"
                                    max={anime.episodes}
                                    value={episodesWatched}
                                    onChange={handleInputChange}
                                />
                                <p> / {anime.episodes}</p>
                            </div>
                            <select
                                name="watching-status"
                                id="watching-status-select"
                                value={watchingStatus}
                                onChange={handleSelectWatchingStatus}>
                                <option value="currently-watching">Currently watching</option>
                                <option value="completed">Completed</option>
                                <option value="dropped">Dropped</option>
                                <option value="plan-to-watch">Plan to watch</option>
                            </select>
                            <button onClick={addAnimeToList}>Save</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AnimeCard;