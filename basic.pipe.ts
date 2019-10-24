import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'basic'
})

export class BasicPipe implements PipeTransform {
    transform(value: string,param1:string){
        if(param1=="upper")
            return value.toUpperCase();
        else(param1=="lower")
            return value.toLowerCase();
    }
}