import Heading from "@/components/Heading";
import Image from "next/image";

export const getServerSideProps = async (context) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            photo: data,
        }
    }
}
const Photo = ({photo}) => {

    return (
        <>
            <Heading tag={'h1'} text={photo.title} />
            <Image src={photo.url} width={400} height={400} alt={photo.title} />
        </>
    )
}

export default Photo;