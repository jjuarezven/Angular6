import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
    selector: 'tab-container',
    template: `
      <ng-template #defaultTabButtons>
        <div class="default-tab-buttons">
          <p> Este texto solo se ve si no está definido headerTemplate en app.component </p>
        </div>
      </ng-template>
      <ng-container *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons"></ng-container>
      <ul>
        <li>there is a default template defined for the tab buttons, called <code>defaultTabButtons</code> </li>
        <li>This template will be used only if the input property <code>headerTemplate</code> remains undefined</li>
        <li>If the property is defined, then the custom input template passed via <code>headerTemplate</code> will be used to display the buttons instead</li>
        <li>the headers template is instantiated inside a ng-container placeholder, using the <code>ngTemplateOutlet</code> property</li>
        <li>the decision of which template to use (default or custom) is taken using a ternary expression, but if that logic was complex we could also delegate this to a controller method</li>
      </ul>
      <hr>
    `})
export class TabContainerComponent implements OnInit {

    @Input()
    headerTemplate: TemplateRef<any>;

    constructor() {

    }

    ngOnInit() {

    }

}


