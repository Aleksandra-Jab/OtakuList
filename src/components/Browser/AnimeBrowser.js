import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import SearchIcon from "../../scss/images/search.png";
import AnimeCard from "./AnimeCard";
import "../../scss/elements/_Browser.scss";

const AnimeBrowser = () => {
    const API_URL = "https://api.jikan.moe/v4/anime?q=";
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch({API_URL})
            .then(response => response.json())
            .then(animes => setAnimes(animes))
            .catch(err => console.log(err))

        searchAnimes("");
    }, []);

    const searchAnimes = async (title) => {
        const response = await fetch(`${API_URL}${title}`);
        const data = await response.json();

        setAnimes(data.data);
        console.log(data);
    }

    return (
        <div className="search" id="search">
            <div className="search__container">
                <div className="search__section">
                    <h3>Browse anime</h3>
                    <div className="search__input">
                        <input
                            typeof="text"
                            placeholder="Search title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === "Enter")
                                    return searchAnimes(searchTerm)
                            }}
                        />
                        <img
                            src={SearchIcon}
                            alt="search"
                            onClick={() => searchAnimes(searchTerm)}
                        />
                    </div>
                </div>
            </div>

            {animes?.length > 0
                ? (
                    <div className="browser__container">
                        {animes.map((anime) => <AnimeCard anime={anime} />
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No anime found...</h2>
                    </div>
                )}
        </div>
    );
}

export default AnimeBrowser;