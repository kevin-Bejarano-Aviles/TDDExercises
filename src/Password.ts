export class Password {
    private password:string;
    constructor (password:string) {
        if (password.length < 8 ){
            throw new Error("el password debe tener un minimo de 8 caracteres")
        }
        this.ValidateRegex(password);
        this.password = password;
        // if(password.length < 8){
        //     throw new Error("Password muy corto")
        // }
        // const regex = /[A-Z]/
        // if(!regex.test(password)){
        //     throw new Error("Password sin mayuscula")
        // }

        // const regexNumber = /\d/
        // if (!regexNumber.test(password)){
        //     throw new Error("Password sin numeros");
        // }
        // const regexEspecialCaracter = /[!@#$%^&*(),.?":{}|<>]/
        // if(!regexEspecialCaracter.test(password)){
        //     throw new Error("Password sin ningun carcater especial")
        // }
        
    }

    private ValidateRegex (password: string):void{
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
        if (!regex.test(password)){
            throw new Error("el password debe contener al menos una mayúscula, un número y un carácter especial");
        }
    }
}