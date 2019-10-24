import { DataFilterPipe } from './datafilter.pipe';
import { BasicPipe } from './basic.pipe';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,BasicPipe,DataFilterPipe],
    bootstrap:[AppComponent]
})
export class AppModule{

}