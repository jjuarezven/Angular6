import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  template: `
  <tab-container [headerTemplate]="customTabButtons"></tab-container>
      <ng-template #defaultTabButtons>
          ESTE ES EL DEFAULT
          <button class="tab-button" (click)="login()">{{loginText}}</button>
          <button class="tab-button" (click)="signUp()">{{signUpText}}</button>
      </ng-template>



      <div class="lessons-list" *ngIf="lessons else loading">
          <div class="lessons-list">
              {{lessons | json}}
          </div>
      </div>


      <ng-template [ngIf]="lessons" [ngIfElse]="loading">
          <div class="lessons-list">
            {{lessonsList | json}}
            <p>esto esta dentro de un ng-template</p>
          </div>
      </ng-template>


      <ng-template #loading >
          <div>Loading</div>
      </ng-template>



      <ng-template #estimateTemplate let-lessonsCounter="estimate">
          <div> Approximately {{lessonsCounter}} lessons ...</div>
          <ul>
      <li>this template, unlike the previous templates also has one input variable (it could also have several)</li>
      <li>the input variable is called <code>lessonsCounter</code>, and it's defined via a ng-template property using the prefix <code>let-</code></li>
      <li>The variable lessonsCounter is visible inside the ng-template body, but not outside</li>
      <li>the content of this variable is determined by the expression that its assigned to the property <code>let-lessonsCounter</code> (<strong>estimate es lo que viene como templateCtx desde ngTemplateOutlet </strong>) </li>
      <li>That expression is evaluated against a context object, passed to <code>ngTemplateOutlet</code> together with the template to instantiate</li>
      <li>This context object must then have a property named <code>estimate</code>, for any value to be displayed inside the template</li>
      <li>the context object is passed to <code>ngTemplateOutlet</code> via the context property, that can receive any expression that evaluates to an object</li>
      </ul>
      </ng-template>

      estamos usando *ngTemplateOutlet para instanciar el template loading
      <ng-container *ngTemplateOutlet="loading"></ng-container>

      <h3>all ng-template instances have access also to the same context on which they are embedded.  But each template can also define its own set of input variables! Actually, each template has associated a context object containing all the template-specific input variables.</h3>
      <ng-container *ngTemplateOutlet="estimateTemplate; context: templateCtx"></ng-container>

      <ng-container *ngIf="lessons">
          <div class="lesson" *ngFor="let lesson of lessons">
              <div class="lesson-detail">
                  {{lesson | json}}
              </div>
          </div>
      </ng-container>


      <ng-template #customTabButtons>
          <div class="custom-class">
              ESTE ES EL CUSTOM
              <button class="tab-button" (click)="login()">{{loginText}}</button>
              <button class="tab-button" (click)="signUp()">{{signUpText}}</button>
          </div>
      </ng-template>


    <hr>
    <p>
    Another thing that we can also do is interact with a template programmatically at the level of the component itself.<br>
    The same way that we can refer to the loading template using a template reference, we can also have a template injected directly into our component using the ViewChild decorator.
    As we can see, the template can be injected just like any other DOM element or component, by providing the template reference name defaultTabButtons to the ViewChild decorator.
    This means that templates are accessible also at the level of the component class, and we can do things such as for example pass them to child components!
    An example of why we would want to do that is to create a more customizable component, where can pass to it not only a configuration parameter or configuration object: we can also pass a template as an input parameter.
    </p>

  `})
export class AppComponent implements OnInit {

    loginText = 'Login';
    signUpText = 'Sign Up';

    lessons = ['Lesson 1', 'Lessons 2'];

    totalEstimate = 10;

    templateCtx = {estimate: this.totalEstimate};


    @ViewChild('defaultTabButtons')
    private defaultTabButtonsTpl: TemplateRef<any>;


    ngOnInit() {
        console.log(this.defaultTabButtonsTpl);
    }

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }

}
