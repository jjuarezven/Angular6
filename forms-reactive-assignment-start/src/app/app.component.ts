import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  singupForm: FormGroup;
  status = ["Stable", "Critical", "Finished"];
  forbiddenProjectNames: string[] = ['Test'];

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      /* projectname: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), */
      projectname: new FormControl(null, Validators.required, this.forbiddenNamesAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.singupForm.value);
  }

  /* forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
  } */

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() =>{
        if (control.value === this.forbiddenProjectNames[0]) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
