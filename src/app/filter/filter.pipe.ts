import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'gridFilter'})
export class GridFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
    	console.log("args --->",args);
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((emp) =>
            emp.title.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
