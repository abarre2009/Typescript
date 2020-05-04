import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsCardComponent } from './items-list/items-card/items-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    ItemsListComponent,
    ItemsCardComponent,
    EditItemModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatDialogModule],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
