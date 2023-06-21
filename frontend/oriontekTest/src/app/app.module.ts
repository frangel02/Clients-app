import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';

@NgModule({
  declarations: [	
    AppComponent,
      ClientsComponent,
      EditClientComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
