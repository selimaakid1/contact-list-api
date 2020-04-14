import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getContact } from '../actions/actions'
import ContactItem from './ContactItem'
import { Button } from 'react-bootstrap'

class ContactList extends Component{
componentDidMount() {
    this.props.getContact()

}
render(){

    return (
        <div>
            <header className="App-header">

                <div>
                    {
                        this.props.contacts.map(el => 
                        
                        <ContactItem info={el} />)
                    }
                </div>
                <Button variant= "light" onClick={ () => this.props.history.goBack()}>Cancel</Button>
           </header>
        </div>
    )
}
} 
const mapStateToProps = state =>{
    return{
        contacts: state.contact
    }
}
export default connect(mapStateToProps, { getContact }) (ContactList)
