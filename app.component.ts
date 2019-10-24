import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    message:string = "AbCd";

    price:number = 100;
    
    value1:number = 3.14356;

    student = {"id":1,"name":"s1"};

    students = [
                {"id":1,"name":"s1"},
                {"id":2,"name":"s2"},
                {"id":3,"name":"s3"},
                {"id":4,"name":"s4"},
                {"id":5,"name":"s5"},
                {"id":6,"name":"s6"},
                {"id":7,"name":"s7"},
                {"id":8,"name":"s8"},
                {"id":9,"name":"s9"},
                {"id":10,"name":"s10"},];

    studentString = JSON.stringify(this.student);

    currentDate = new Date();

}