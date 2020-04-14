
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editContact } from '../actions/actions'


class EditContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        let contact = this.props.contacts.filter(el => String(el._id) === this.props.match.params.id)
        this.setState(contact[0])
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} />
                    </div>
                    <div>
                        <Button variant="light" onClick={ () => this.props.editContact(this.state._id, {
                            name: this.state.name,
                            email: this.state.email,
                            phone: this.state.phone
                        })} > Confirm</Button>
                        <Button variant="light" onClick={ () => this.props.history.goBack()}>Cancel</Button>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        contacts: state.contact
    }
}

export default connect(mapStateToProps, {editContact})(EditContact)