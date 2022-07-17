//single principle
var User = /** @class */ (function () {
    function User(props) {
        this.id = this.getRandomId();
        this.username = props.username;
        this.password = props.password;
    }
    User.prototype.getRandomId = function () {
        return Math.random();
    };
    return User;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.save = function (user) {
        console.log('save User');
        console.log(user);
    };
    return UserRepository;
}());
var UserLogger = /** @class */ (function () {
    function UserLogger() {
    }
    UserLogger.prototype.log = function (user) {
        console.log('log user');
        console.log(user);
    };
    return UserLogger;
}());
var user = new User({ username: 'Nazar', password: '8888888' });
var userLogger = new UserRepository();
userLogger.save(user);
console.log(user);
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function () {
    };
    HttpClient.prototype.post = function () {
    };
    HttpClient.prototype.put = function () {
    };
    HttpClient.prototype.delete = function () {
    };
    return HttpClient;
}());
var UserService = /** @class */ (function () {
    function UserService(client) {
        this.client = client;
    }
    UserService.prototype.getOneUser = function () {
    };
    UserService.prototype.getAllUser = function () {
    };
    return UserService;
}());
var RequisitesService = /** @class */ (function () {
    function RequisitesService() {
    }
    RequisitesService.prototype.createRequisites = function () {
    };
    RequisitesService.prototype.getRequisites = function () {
    };
    RequisitesService.prototype.updateRequisites = function () {
    };
    return RequisitesService;
}());
