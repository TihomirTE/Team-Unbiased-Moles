import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirstLetter'
})

export class CapitalizeFirstLetter implements PipeTransform {
    transform(input: string): string {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}
