type H3PropsType = {
    text?: string
}

const H3 = (props:H3PropsType) => {
    return (
        <h3>{props.text}</h3>
    );
};

export default H3;