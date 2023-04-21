import Heading from "@/components/Heading";
import Head from "next/head"
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // const data = false;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            contacts: data,
        }
    }
}

const Contacts = ({contacts}) => (
    <>
        <Head>
            <title>
                Contacts
            </title>
        </Head>
        <Heading text={'Contacts All'}/>
        <ul className={'list'}>
            {contacts && contacts.map(item => (
                <li key={item.id}><Link href={`/contacts/${item.id}`}>{item.name}: {item.email}</Link></li>
            ))}
        </ul>
    </>
)

export default Contacts;