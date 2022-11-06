class user {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    //methods
    login() {
        console.log(this.email, 'just logged in');

    }
    logout() {
        console.log(this.email, 'just logged out');

    }

}
var userone = new user('noor@gmail.com', "noor");
var usertwo = new user('huda@gmail.com', 'huda');

userone.login();
usertwo.logout();