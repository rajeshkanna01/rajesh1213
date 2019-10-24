import { Student } from './student';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datafilter'
})

export class DataFilterPipe implements PipeTransform {
    transform(values:Student[],idValue:number,nameValue:string){
        
        if(values&&idValue&&nameValue){
            var newArray = values.filter((data)=>{
                if(data.id==idValue&&data.name==nameValue)
                    return true;
                else
                    return false;
            })
            return newArray;
        }
        else
            return values;
    }
}