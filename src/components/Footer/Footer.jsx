import styles from './footer.module.css';
console.log(styles);
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1>Футер</h1>
            <p >Описание заголовка</p>
        </footer>
    );
}

export default Footer;