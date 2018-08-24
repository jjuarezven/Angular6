import {Component, OnInit, ViewChild, AfterViewInit, ContentChildren, QueryList} from '@angular/core';
import {HeroesService} from './heroes/heroes.service';
import { TabsComponent } from './tabs/tabs.component';
import { DynamicTabAnchorDirective } from './tabs/dynamic-tab-anchor.directive';

@Component({
  selector: 'app-root',
  template: `
    <h1>Reusable Angular Components - Tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="Hero List">
        <h1>Hero List</h1>
        <app-heroes-list [heroes]="heroes" (addHero)="onAddHero()"></app-heroes-list>
      </ngx-tab>
      <ngx-tab tabTitle="Hero" [template]="hello" [dataContext]="heroes[0]"></ngx-tab>
    </ngx-tabs>
    <ng-template #hello let-hero="data" appDynamicTabAnchor id="templateHello">
      Explicacion: usando <code>ng-template</code> como la variable #hello,
      pasamos la referencia del template al componente tab, tab usa <code>ng-container</code> y <code>ngTemplateOutlet</code>
      para recibir esa referencia y renderizarla, ojo, tambien usa <code>@Input() template;</code> {{hero?.name}}
    </ng-template>
  `,
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('hello') helloTemplate;
  @ViewChild(TabsComponent) tabsComponent: any;
  heroes;

  @ViewChild(DynamicTabAnchorDirective) dynamicTabPlaceholder: DynamicTabAnchorDirective;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  ngAfterViewInit() {
    console.log('este es el contenido de templateHello (TemplateRef) ' + this.helloTemplate);
    const test = this.dynamicTabPlaceholder;
    const t = '1';
  }

  onAddHero() {
    this.tabsComponent.openTab();
  }
}
