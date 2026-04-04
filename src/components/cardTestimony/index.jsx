import styles from "./styles.module.scss"

import { Star } from 'lucide-react';

export function CardTestimony({ testimony, name }){
    return(
        <div className={styles.card}>
            <div className={styles.boxStars}>
                <Star size={20} color="#e0731f" fill="#e0731f"/>
                <Star size={20} color="#e0731f" fill="#e0731f"/>
                <Star size={20} color="#e0731f" fill="#e0731f"/>
                <Star size={20} color="#e0731f" fill="#e0731f"/>
                <Star size={20} color="#e0731f" fill="#e0731f"/>
            </div>
            <i>"{testimony}"</i>
            <span>{name}</span>
        </div>
    )
}