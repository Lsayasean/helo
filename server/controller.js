module.exports = {
    register: (req, res) => {
        let { username, password } = req.body;
        let db = req.app.get('db')
        db.create_user(username, password).then(results => {
            res.status(200).send('welcome')
        })
    },
    async login(req, res) {
        let {password, username} = req.body;
        let db = req.app.get('db')
        let [foundUser] = await db.find_user(username);
        // console.log(foundUser)
        if(foundUser.user_password === password){
            res.status(200).send('Logged in')
        } else {
            res.status(401).send('Incorrect Password')
        }
    },
    getPost(req, res) {
        let db = req.app.get('db')
        db.post_join().then(results => {
            res.status(200).send(results)
        })
    },
    singlePost(req, res) {
        let id = req.body.id
        let db = req.app.get('db')
        db.search_id(id).then(results => {
            res.status(200).send(results)
        })
    },
    getUser(req, res) {
        let db = req.app.get('db')
        db.get_post().then(results => {
            res.status(200).send(results)
        })

    }

}
