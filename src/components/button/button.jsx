import React, {memo} from 'react';
import clsx from "clsx";

import styles from "./button.module.scss"

export const Button = memo(({
    children,
    clickHandler,
    doubleClickHandler,
    disabled = false,
    loading = false
}) => {
    return (
        <div className={styles.btnWrapper}>
            <button 
                className={clsx(styles.btn, loading && styles.btnLoading)}
                onClick={clickHandler}
                disabled={disabled}
                onDoubleClick={doubleClickHandler}
            >
                {children}
            </button>
        </div>
    );
});

