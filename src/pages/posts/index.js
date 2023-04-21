import Heading from "@/components/Heading";
import Head from "next/head";
import styles from "@/styles/posts.module.scss"
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: { posts: data }
    }
}

const Posts = ({posts}) => (
    <div>
        <Head>
            <title>
                Post
            </title>
        </Head>
        <Heading className={styles.h1} text={'Hello Index'}/>
        <ul className={'list'}>
            {posts && posts.map(item => (
                <li key={item.id}><Link href={`posts/${item.id}`}>{item.title}</Link></li>
            ))}
        </ul>
    </div>
)

export default Posts;