import React from 'react'
import { Card, Button }from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/actions'
import { Link } from 'react-router-dom'

const ContactItem = props => {
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>{props.info.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>
                        {props.info.email}
                    </Card.Text>
                    <Card.Title>Phone</Card.Title>
                    <Card.Text>
                        {props.info.phone}
                    </Card.Text>
                    <Link to={`/contact/${props.info._id}`}><Button variant="dark">Edit</Button></Link>
                    <Button variant="danger" onClick={() => props.deleteContact(props.info._id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { deleteContact }) (ContactItem)
