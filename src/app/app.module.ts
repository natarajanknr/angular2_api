import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { GridComponent } from './grid/grid.component';
//import { AgGridComponent } from './ag-grid/ag-grid.component';


import { GridFilterPipe } from './filter/filter.pipe';
import {BasicServices} from './Services/basic.services';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    GridComponent,
    GridFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BasicServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
