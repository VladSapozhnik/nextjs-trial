import Heading from "@/components/Heading";

const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};
    if (!contact) {
        return <Heading text={'Not Contact'} tag={'h3'} />
    }
    return (
        <>
            <Heading text={name} tag={'h3'} />
            <div>email: <strong>{email}</strong></div>
            <div>Address: <strong>{street}, {suite}, {city}, {zipcode}</strong></div>
        </>
    )
}

export default ContactInfo;