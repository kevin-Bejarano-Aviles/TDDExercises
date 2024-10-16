export class Password {
    constructor (passwrod:string) {
        if (passwrod.length < 8 ){
            throw new Error("Password muy corto")
        }
        this.ValidateRegex(passwrod);
        
        // if(passwrod.length < 8){
        //     throw new Error("Password muy corto")
        // }
        // const regex = /[A-Z]/
        // if(!regex.test(passwrod)){
        //     throw new Error("Password sin mayuscula")
        // }

        // const regexNumber = /\d/
        // if (!regexNumber.test(passwrod)){
        //     throw new Error("Password sin numeros");
        // }
        // const regexEspecialCaracter = /[!@#$%^&*(),.?":{}|<>]/
        // if(!regexEspecialCaracter.test(passwrod)){
        //     throw new Error("Password sin ningun carcater especial")
        // }
        
    }

    private ValidateRegex (password: string):void{
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
        if (!regex.test(password)){
            throw new Error("Password debe contener al menos una mayúscula, un número y un carácter especial");
        }
    }
}