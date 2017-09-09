import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToString'
})

export class ConvertToString implements PipeTransform {

    transform(input: any): string {
    const year = input.year;
    const day = input.day;
    const month = input.month;
    const setMonth = month < 10 ? '0' + month : '' + month;
    const setDay = day < 10 ? '0' + day : '' + day;

    return setDay + '.' + setMonth + '.' + '' + year;
    }
}
