import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user-service';
import { Profile } from '../domain/Profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';
// https://www.concretepage.com/angular-2/angular-2-select-option-multiple-select-option-validation-example-using-template-driven-form
@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	@Input() mensajeExterno2: string;
  isValidFormSubmitted = false;
  allProfiles: Profile[];
  allTechnologies: Technology[];
  user = new User();
  eventoUsuario = new EventEmitter<User>();
  
	constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.allProfiles = this.userService.getProfiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

	onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.valid) {
      this.isValidFormSubmitted = true;
		}
		else {
      return;
    }
    const newUser = this.createUser(form);

    this.userService.createUser(newUser);

    this.resetForm(form);
  }

	resetForm(form: NgForm) {
    form.resetForm();
    this.user.profile = null;
    this.user.userName = '';
  }

	setDefaultValues() {
    this.user.userName = 'Narendra Modi';
    this.user.profile = this.allProfiles[2];
    this.user.technologies = [this.allTechnologies[1], this.allTechnologies[3]];
  }

	onProfileChange() {
    console.log('Profile Changed: ' + this.user.profile.prName);
  }

	compareTech(t1: Technology, t2: Technology): boolean {
    console.log(t1.techId + '-' + t2.techId);
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }

  onAddServer(form: NgForm) {
    this.eventoUsuario.emit(this.createUser(form));
  }

  private createUser(form: NgForm) {
    const userName = form.controls['name'].value;
    const userProfile: Profile = form.controls['profile'].value;
    const userTechnologies: Technology[] = form.controls['selectedTechs'].value;

    const newUser = new User();
    newUser.userName = userName;
    newUser.profile = userProfile;
    newUser.technologies = userTechnologies;
    return newUser;
  }
}

