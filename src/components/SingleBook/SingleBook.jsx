import { Card } from "react-bootstrap"

const SingleBook = ({ book }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price} €</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleBook