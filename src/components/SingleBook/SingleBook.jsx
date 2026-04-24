import Card from 'react-bootstrap/Card';

const SingleBook = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />

            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price} €</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleBook