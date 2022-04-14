import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {JokesContext} from "../../context/joke-context";
import {Button} from "../../components/button/button";
import {Joke} from "../../components/joke/joke";

import styles from "./main.module.scss"

export const Main = () => {
    const {isLoading, joke, updateJokeList, loadRandomJoke} = useContext(JokesContext)
    const [started,setStarted] = useState(false)
    
    useEffect(() => {
        let interval = undefined;
        if (started){
            interval = setInterval(() => {
                loadRandomJoke()
            },3000)
        }else{
            clearInterval(interval)
        }
        
        return () => {
            clearInterval(interval)
        }
    },[started])
    
    const addJokeToFavorite = () => {
        updateJokeList(joke)
    }
    
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.btnBlock}>
                <Button
                    clickHandler={loadRandomJoke}
                    loading={isLoading}
                    disabled={isLoading}
                >Load random joke</Button>
                <Button
                    clickHandler={() => setStarted(!started)}
                >Load Interval</Button>
            </div>
            <div>
                {joke && <Joke 
                    id={joke.id} 
                    value={joke.value} 
                    icon_url={joke.icon_url} 
                    withAction 
                    action={addJokeToFavorite}
                />}
            </div>
            <div>
                <Link className={styles.link} to="/favorites">Show favorite jokes</Link>
            </div>
        </div>
    );
};

