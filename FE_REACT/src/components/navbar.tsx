import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { searchText } from "reduxstore/slices/searchSlice"

function Navbar() {
    const [ searchVal, setSearchVal ] = useState("")
    const dispatch = useDispatch()
    const submitSearch = ((e:any) => {
        e.preventDefault()
        dispatch(searchText({ data: searchVal}))
    })

    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col sm={6}>
                    <Form className="d-flex" onSubmit={submitSearch}>
                        <Form.Control
                            value={searchVal}
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                            onChange={(e:any) => setSearchVal(e.target.value)}
                        />
                        <Button type="submit" className="rounded-pill" variant="outline-primary">Search</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar