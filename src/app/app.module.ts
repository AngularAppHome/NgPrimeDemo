import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { appRouterModule } from './app.routing.module';
import { DatatabledemoComponent } from './datatabledemo/datatabledemo.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { CarService } from 'src/app/datatabledemo/car.service';
import { HttpModule } from '@angular/http';
import {Dialog,DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DatatabledemoComponent
  ],
  imports: [
    BrowserModule, appRouterModule, TableModule,HttpModule,DialogModule,FormsModule,ReactiveFormsModule
    ,BrowserAnimationsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
