import styles from '@/styles/navbar.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";

const navigation = [
    {id: 1, title: 'Home', link: '/'},
    {id: 2, title: 'Posts', link: '/posts'},
    {id: 3, title: 'Contacts', link: '/contacts'},
    {id: 4, title: 'Photos', link: '/photos'},
    {id: 5, title: 'About', link: '/about'}
]
const Navbar = () => {
    const {pathname} = useRouter();
    return (
        <>
            <nav className={styles.nav}>
                    <Link href="/" >Logo</Link>
                    <ul className={styles.menu}>
                        {navigation.map(({id, title, link}) => (
                            <li className={pathname === link ? 'active' : ''} key={id}><Link href={link}>{title}</Link></li>
                        ))}
                    </ul>
            </nav>

        </>
    )
}

export default Navbar;