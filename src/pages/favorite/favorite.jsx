import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Joke} from "../../components/joke/joke";
import {Button} from "../../components/button/button";
import {JokesContext} from "../../context/joke-context";

import styles from "./favorite.module.scss"

export const Favorite = () => {
    const {jokes,removeFromJokes,removeJokes} = useContext(JokesContext)
    const history = useHistory()
    
    const goBack = () => history.goBack()
    
    const removeJoke = (id) => {
        removeFromJokes(id)
    }
    
    const clearJokeList = (id) => {
        removeJokes()
    }
    
    return (
        <div className={styles.favoriteWrapper}>
            <div>
                {jokes.length ? (
                    <Button clickHandler={clearJokeList}>Clear favorite jokes</Button>
                ) : (
                    <>
                        <p>List is empty</p>
                        <Button clickHandler={goBack}>Go back to home</Button>
                    </>
                )}
            </div>
            <div className={styles.favoriteJokeItems}>
                {jokes.map(el => (
                    <div key={el.id} className={styles.favoriteJokeItem}>
                        <Joke id={el.id} value={el.value} />
                        <Button clickHandler={() => removeJoke(el.id)}>Remove</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

