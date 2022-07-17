//single principle

class User {
    id: number
    username: string
    password: string

    constructor(props) {
        this.id = this.getRandomId()
        this.username = props.username
        this.password = props.password

    }

    getRandomId() {
        return Math.random();
    }

}

class UserRepository {
    save(user: User) {
        console.log('save User')
        console.log(user)
    }
}

class UserLogger {
    log(user: User) {
        console.log('log user')
        console.log(user)
    }
}

const user = new User({username: 'Nazar', password: '8888888'})
const userLogger = new UserRepository()
userLogger.save(user)

console.log(user)

class HttpClient {
    get() {
    }

    post() {
    }

    put() {
    }

    delete() {

    }
}

class UserService {
    client: HttpClient

    constructor(client) {
        this.client = client;
    }

    getOneUser() {
    }

    getAllUser() {
    }

}

class RequisitesService {
    createRequisites() {
    }

    getRequisites() {
    }

    updateRequisites() {
    }
}