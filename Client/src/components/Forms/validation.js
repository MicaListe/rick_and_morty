export default function Validation(inputs){
    const regexEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

    const error={};
     
    (!inputs.email) ? error.email= "Email is required": error.email=""; //Si email esta vacia se imprime el mensaje, si no esta vacia: comillas vacias
    (inputs.email.length >35) ? error.email ="Email must cant be more than 35 characters": error.email="";
    (!regexEmail.test(inputs.email))? error.email= "Email is invalid" : error.email="";
    (!regexPassword.test(inputs.password))? error.password='Password is invalid':error.email='';
    return error
}