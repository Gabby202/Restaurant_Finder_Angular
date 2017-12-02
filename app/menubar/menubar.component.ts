import {Component} from '@angular/core';
@Component({
    moduleId:     module.id,
    selector:    'menubar',
    templateUrl: 'menubar.component.html'
})
export default class MenubarComponent {

      name: string;
      search(search:string): void {
        console.log("New Search: " + search);
        this.name = search;
      }
}
