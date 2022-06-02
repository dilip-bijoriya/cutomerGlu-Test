import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { ModalareaComponent } from './components/modalarea/modalarea.component';
import { ParentCountComponent } from './components/countDown/parent-count/parent-count.component';
import { ChildCountComponent } from './components/countDown/child-count/child-count.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ModalComponent,
    ModalareaComponent,
    ParentCountComponent,
    ChildCountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
