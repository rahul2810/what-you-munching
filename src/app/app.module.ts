import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { MunchitAPIService} from './munchit-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [MunchitAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
