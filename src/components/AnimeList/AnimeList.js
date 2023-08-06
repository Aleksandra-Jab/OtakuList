import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "../../scss/elements/_AnimeList.scss";
import CloseIcon from "../../scss/images/close.png";

const AnimeList = () => {
    const [userList, setUserList] = useState([]);
    const [currentStatus, setCurrentStatus] = useState("");
    const [editingItemId, setEditingItemId] = useState(null);
    const [editedProgress, setEditedProgress] = useState(0);
    const [editedWatchingStatus, setEditedWatchingStatus] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/animeList")
            .then(response => response.json())
            .then(userList => setUserList(userList))
            .catch(err => console.log(err))

        console.log(userList);
    }, []);

    const CloseAnimeList = () => {
        document.getElementById("anime-list").style.display = "none";
    }

    const sortByStatus = (status) => {
        setCurrentStatus(status);
    }

    const filteredUserList =
        currentStatus !== ""
            ? userList.filter((userListItem) => userListItem.watchingStatus === currentStatus)
            : userList;

    const handleDeleteUserListItem = (id) => {
        fetch(`http://localhost:3000/animeList/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    const updatedUserList = userList.filter((userListItem) => userListItem.id !== id);
                    setUserList(updatedUserList);
                } else {
                    console.error("Failed to delete the item.");
                }
            })
            .catch((error) => {
                console.error("Error while deleting:", error);
            });
    };

    const handleEditUserListItem = (id) => {
        if (editingItemId === id) {
            setEditingItemId(null);
            setEditedProgress(0);
            setEditedWatchingStatus("");
        } else {
            const itemToEdit = userList.find((userListItem) => userListItem.id === id);
            setEditingItemId(id);
            setEditedProgress(itemToEdit.progress);
            setEditedWatchingStatus(itemToEdit.watchingStatus);
        }
    };

    const handleSaveEdit = (id) => {
        fetch(`http://localhost:3000/animeList/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ progress: editedProgress, watchingStatus: editedWatchingStatus }),
        })
            .then((response) => {
                if (response.ok) {
                    const updatedUserList = userList.map((userListItem) => {
                        if (userListItem.id === id) {
                            return { ...userListItem, progress: parseInt(editedProgress), watchingStatus: editedWatchingStatus };
                        }
                        return userListItem;
                    });
                    setUserList(updatedUserList);
                    setEditingItemId(null);
                } else {
                    console.error("Failed to update the item.");
                }
            })
            .catch((error) => {
                console.error("Error while updating:", error);
            });
    };

    return (
        <div className="anime-list" id="anime-list">
            <div className="anime-list__container">
                <div>
                    <h1>Anime list</h1>
                    <img
                        src={CloseIcon}
                        alt="close-icon"
                        onClick={CloseAnimeList}
                    />
                </div>
                <div className="anime-list__status">
                    <p onClick={() => sortByStatus("")}>All</p>
                    <p onClick={() => sortByStatus("currently-watching")}>Watching</p>
                    <p onClick={() => sortByStatus("completed")}>Completed</p>
                    <p onClick={() => sortByStatus("dropped")}>Dropped</p>
                    <p onClick={() => sortByStatus("plan-to-watch")}>Plan to watch</p>
                </div>
                <div className="anime-list__table">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Anime title</th>
                                <th>Progress</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {filteredUserList.map((userListItem, index) => {
                            return (
                                <tr key={userListItem.id}>
                                    <td>{index+1}</td>
                                    <td>{userListItem.title}</td>
                                    <td>
                                        {editingItemId === userListItem.id ? (
                                            <>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    max={userListItem.episodes}
                                                    value={editedProgress}
                                                    onChange={(e) => setEditedProgress(e.target.value)}
                                                />
                                                <select
                                                    name="watching-status"
                                                    id="watching-status-select"
                                                    value={editedWatchingStatus}
                                                    onChange={(e) => setEditedWatchingStatus(e.target.value)}
                                                >
                                                    <option value="currently-watching">Currently watching</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="dropped">Dropped</option>
                                                    <option value="plan-to-watch">Plan to watch</option>
                                                </select>
                                                <button onClick={() => handleSaveEdit(userListItem.id)}>save</button>
                                            </>
                                        ) : (
                                            `${userListItem.progress}/${userListItem.episodes}`
                                        )}
                                    </td>
                                    <td>
                                        {editingItemId === userListItem.id ? (
                                            <p onClick={() => handleSaveEdit(userListItem.id)}>save</p>
                                        ) : (
                                            <p onClick={() => handleEditUserListItem(userListItem.id)}>edit</p>
                                        )}
                                        <p>/</p>
                                        <p onClick={() => handleDeleteUserListItem(userListItem.id)}>delete</p>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AnimeList;