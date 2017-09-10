import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booleanType'
})

export class BooleanType implements PipeTransform {
    transform(value: boolean): string {
        return value === true ? 'Yes' : 'No';
    }
}
