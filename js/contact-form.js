const address = document.querySelector("#address");

const name = document.querySelector("#name");

const surname = document.querySelector("#surname");

const email = document.querySelector("#e-mail");

const number = document.querySelector("#number");


const isRequired = (value) => {
    if (value.length != 0){
        //return true;
        console.log('true')
    }
    else {
        //return false;
        console.log('false')
    }
}
//isRequired('ok');
//isRequired('');

const validateEmail = (email) => {
    const test = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (test === true){
        console.log('true')
    }
    else{
        console.log('not true')
    }
};
validateEmail('okaaayy');
validateEmail('emma.friebel@denkwerk.com');