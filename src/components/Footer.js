import Heading from "@/components/Heading";
import styles from "@/styles/footer.module.scss"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Heading tag={'h3'} text={'Footer NEXT JS'} />
        </footer>
    )
}

export default Footer;