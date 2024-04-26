import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">© 2024 Stream Sphere. All rights reserved.</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
