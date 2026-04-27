import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"

const AllTheBooks = () => {
    return (
        <Container>
            <Row className="g-4">

                {fantasy.map((book) => (
                    <Col md={3} key={book.asin}>
                        <SingleBook
                            img={book.img}
                            title={book.title}
                            price={book.price}
                        />
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default AllTheBooks