import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Ana'];

  ngOnInit() {
    this.singupForm = new FormGroup({
      // form anidado
      userData: new FormGroup({
        /* Explicacion del BIND: If in the validator method the this keyword is used (when pointing to a class property of this component),
        the value of this has to be bound when the method is called, to make sure that this points to this component instance,
        as it should. */
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    /* se puede usar tambien en cada control del formulario */
    /* this.singupForm.valueChanges.subscribe((value) =>
      console.log(value)
    ); */
    this.singupForm.statusChanges.subscribe((status) =>
      console.log(status)
    );
  }

  onSubmit() {
    console.log(this.singupForm.value);
  }

  onAddHobby() {
    // agregaremos un control en tiempo de ejecucion
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.singupForm.get('hobbies')).push(controls);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
