const express = require('express')
const mongodb = require('mongodb')

const app = express()

app.use(express.json())

const mongourl = 'mongodb://localhost: 27017'
const dbname = 'contactManager'

const ObjectId = require('mongodb').ObjectID;


mongodb.MongoClient.connect(mongourl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err
    console.log('Database is connected')
    let db = client.db(dbname)


    // Create new contact
    app.post('/newcontact', (req, res) => {
        console.log(req.body)
        db.collection('contacts').insertOne(req.body, (err, contact) => {
            if (err) res.send('Something went wrong!!!')
            res.send(contact)
        })
    })

    // Get all contacts

    app.get('/allcontact', (req, res) => {
        db.collection('contacts').find().toArray((err, contacts) => {
            if (err) throw err
            res.send(contacts)
        })
    })

    // Get one contact by ID

    app.get('/contact/:id', (req, res) => {
        let contactId = ObjectId(req.params.id)
        db.collection('contacts').findOne({ _id: contactId }, (err, contact) => {
            if (err) throw err
            res.send(contact)
        })
    })

    // Delete contact

    app.delete('/deletecontact/:id', (req, res) => {
        let contactId = ObjectId(req.params.id)
        db.collection('contacts').findOneAndDelete({ _id: contactId }, (err, data) => {
            if (err) throw err
            if (data.value) {
                res.send('Contact Deleted!')
            } else {
                res.send('Contact Not Found!')
            }
        })
    })

    // Update contact 

    app.put('/editcontact/:id', (req, res) => {
        let contactId = ObjectId(req.params.id)
        db.collection('contacts').findOneAndUpdate({
            _id: contactId}, { $set: { ...req.body } }, (err, data) => {

            if (err) throw err
            db.collection('contacts').findOne({ _id: contactId }, (err, contact) => {
                if (err) throw err
                res.send(contact)
            })
        })
    })


    app.listen(5000, (err) => {
        if (err) throw err
        console.log('Server is running on port 5000')
    })
})