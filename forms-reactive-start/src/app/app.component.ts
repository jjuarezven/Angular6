import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];

  singupForm: FormGroup;

  ngOnInit() {
    this.singupForm = new FormGroup({
      // form anidado
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.singupForm.value);
  }

  onAddHobby() {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.singupForm.get('hobbies')).push(controls);
  }
}
