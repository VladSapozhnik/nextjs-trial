import Heading from "@/components/Heading";


export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(({id}) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    // const data = false;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: data,
        }
    }
}

const Post = ({post}) => {
    return (
        <>
            <Heading text={`Title: ${post.title}`} tag={'h3'} />
            <p>{post.body}</p>
        </>
    )
}

export default Post;