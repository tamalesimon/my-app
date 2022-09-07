import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl){
        if ((control.value as string).indexOf(' ') >= 0) {
        return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            const val = control.value as string;
            setTimeout(() => {
                val === "simon" ? resolve({ shouldBeUnique: true }) : resolve(null);
            } , 2000);
        });
    }
}