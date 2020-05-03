import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsCardComponent } from './items-list/items-card/items-card.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, AddItemFormComponent, ItemsListComponent, ItemsCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
