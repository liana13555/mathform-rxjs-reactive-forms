import { AbstractControl } from "@angular/forms";

export class MathValidators {        // making reusable validator
    static addition(target: string, sourceOne:string, sourceTwo:string) {
        return (form: AbstractControl) => { 
            const sum = form.value[target]
            const firstNumber = form.value[sourceOne]
            const secondNumber = form.value[sourceTwo]

            if (firstNumber + secondNumber === parseInt(sum)) {
                    return null
                }
            return { addition: true }            
        }
    }  
}

// export class MathValidators {
//     static addition(form: AbstractControl) {
//         const {a, b, answer } = form.value
//             if (a + b === parseInt(answer)) {
//                 return null
//             }
//         return { addition: true }
//     }  
// }