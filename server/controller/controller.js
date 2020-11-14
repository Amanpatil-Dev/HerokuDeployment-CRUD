const Userdb = require('../model/model')

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ error: "content cannot be empty" })
        return
    }

    // const user=Userdb.create(req.body)

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status

    })

    // save user
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured'
            })
        })

}

// retirve and return  all user/specific user
exports.find = async (req, res) => {

    if (req.query.id) {
        // console.log('got here')
        const id = req.query.id
        Userdb.findById(id).then(data => {
            if (!data) {
                res.status(404).send({ message: 'nOT found user' })
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({ message: 'error retriving with id' })
        })
    } else {
        // console.log('got here 2')
        Userdb.find()
      
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || 'error occured ' })
            })


    }



}

// update a new identify user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Data to be update cannot be found' })

    }
    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot Update user ', id })

            } else {
                res.send(data)
                console.log(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Error updating user info' })
        })


}

// delete the user
exports.delete = (req, res) => {
    const id = req.params.id
    Userdb.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(404).send({ message: 'Canot find user' })
        } else {
            res.send({
                message: "User Deleted Successfully"
            })
        }

    }).catch(err => {
        res.status(500).send({
            message: 'couldnt not delet the user'
        })
    })

}