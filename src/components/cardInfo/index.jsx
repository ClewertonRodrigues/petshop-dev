import styles from "./styles.module.scss"

export function CardInfo({ icon, title, info }){
    return(
        <div className={styles.cardInfo}>
            {icon}
            <strong>{title}</strong>
            <span>{info}</span>
        </div>
    )
}