import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any) {
    if (value === '') {
      return null;
    }
    return value.sort((a, b) => {
      return a.started.getTime() - b.started.getTime();
    } );
  }
}
