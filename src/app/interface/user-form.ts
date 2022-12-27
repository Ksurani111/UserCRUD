import { FormControl } from "@angular/forms";

export interface UserForm {
    userName?: FormControl<string>;
    city?: FormControl<string>;
    dateOfBirth?: FormControl<Date>;
     
}
