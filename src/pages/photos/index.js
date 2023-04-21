import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/photos');
    // const response = await fetch(`${process.env.API_HOST}/photos`);

    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {photos: data}
    }
}

const Photos = ({photos}) => {


    return (
        <>
            <ul className={'list'}>
                {photos.map(item => (
                    <li key={item.id}>
                        <Image src={item.thumbnailUrl} width={50} height={50} alt={item.title} />
                        <Link href={`/photos/${item.id}`}>
                            <Heading tag={'h3'} text={item.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Photos;