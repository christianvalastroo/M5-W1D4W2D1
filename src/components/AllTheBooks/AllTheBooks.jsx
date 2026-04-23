import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"

const AllTheBooks = () => {
    return (
        <Container>
            <Row>
                {fantasy.map((book) => (
                    <Col md={3} className="mb-4" key={book.asin}>
                        <SingleBook book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks