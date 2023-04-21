import ContactInfo from "@/components/ContactInfo";
import Link from "next/link";
export const getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    // const data = false;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            contact: data,
        }
    }
}
const Id = ({contact}) => (
    <>
        <Link href={'/contacts'}>back page</Link>
        <ContactInfo contact={contact} />
    </>
)

export default Id;