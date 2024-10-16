import { Password } from '../src/Password';
/* 
Ejercicio TDD:
Descripción: Implementar una función que valide contraseñas basadas en las siguientes reglas:
La contraseña debe tener al menos 8 caracteres.
Debe contener al menos una letra mayúscula.
Debe contener al menos un número.
Debe contener al menos un carácter especial (como !, @, #, etc.).
Desafío TDD: Debe escribir casos de prueba para validar las contraseñas según estas reglas, luego implementar la lógica hasta que pasen todas las pruebas.
*/

describe ("Test in password class", ()=> {
    //? Testing before refactoring

    // it("Password error if less than 8 characters", ()=> {

    //     expect(()=> {
    //         new Password("1234567");
    //     }).toThrow("el password debe tener un minimo de 8 caracteres")
    // });
    
    // it("The password gives error when it does not have any capital letter.", () => {

    //     expect(()=> {
    //         new Password("12345678");
    //     }).toThrow("Password sin mayuscula");
    // });

    // it("Password gives error when it has no number", () => {
    //     expect (()=> {
    //         new Password("ASqweqwe");
    //     }).toThrow("Password sin numeros")
    // });

    // it("Password gives error when it has no special characters", () => {
    //     expect (()=> {
    //         new Password ("123ASD123")
    //     }).toThrow("Password sin ningun carcater especial");
    // });

    // it("Correct password",() => {
    //     expect(()=> {
    //         new Password ("asdQWE$123");
    //     }).not.toThrow();
    // });

    //? Testing after refactoring

    it("Password error if less than 8 characters", ()=> {

        expect(()=> {
            new Password("1234567");
        }).toThrow()
    });
    
    it("Password gives error when it does not have any capital letter.", () => {

        expect(()=> {
            new Password("12345678");
        }).toThrow();
    });

    it("Password gives error when it has no number", () => {
        expect (()=> {
            new Password("ASqweqwe");
        }).toThrow()
    });

    it("Password gives error when it has no special characters", () => {
        expect (()=> {
            new Password ("123ASD123")
        }).toThrow();
    });

    it("Correct password",() => {
        expect(()=> {
            new Password ("asdQWE$123");
        }).not.toThrow();
    });
});