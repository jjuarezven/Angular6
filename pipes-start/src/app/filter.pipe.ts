import { Pipe, PipeTransform, defineInjector } from '@angular/core';

// por defecto, los pipes no son recalculados cuando se agregan objetos a las colecciones para evitar problemas de performance,
// se agrega pure: false para que el pipe se recalcule.  Esto se ve si aplicamos un filtro y tratamos de agregar un nuevo server
@Pipe({
  name: 'filter', pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
