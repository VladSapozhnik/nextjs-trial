const Heading = ({tag, text, className}) => {
    const ClassName = className || '';
    const Tag = tag || 'h1';
    return <Tag className={ClassName}>{text}</Tag>
}

export default Heading;