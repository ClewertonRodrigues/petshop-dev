import styles from "./styles.module.scss";

export function CardService({ imgUrl, icon, title, description }) {
  return (
    <article className={styles.containerCard}>
      <div className={styles.boxImg}>
        <img src={imgUrl} alt={title} />
        <div className={styles.boxIcon}>
          <div className={styles.icon}>{icon}</div>
        </div>
      </div>
      <div className={styles.boxContent}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </article>
  );
}
