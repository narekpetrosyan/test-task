import React from 'react';
import {Button} from "../button/button";

import styles from "./joke.module.scss"

export const Joke = ({id,icon_url,value, action, withAction = false}) => {
    return (
        <div className={styles.jokeWrapper}>
            <div className={styles.joke}>
                {/*<img src={icon_url} alt={id}/>*/}
                <p>{value}</p>
            </div>
            {withAction && <div className={styles.actions}>
                <Button clickHandler={action}>Add to favorites</Button>
            </div>}
        </div>
    );
};

