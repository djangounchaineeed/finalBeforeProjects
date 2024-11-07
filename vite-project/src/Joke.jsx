

export default function Joke(props) {

    let stars = ""
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
            stars += '🐘';
        } else {
            stars += '';
        }
    }

    return (

        <>
            <p>{props.joke}</p>
            <p>{props.rating}</p>

        </>

    )
}