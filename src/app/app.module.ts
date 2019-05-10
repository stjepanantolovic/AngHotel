import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TestCComponent } from './test-c/test-c.component';
import { RoomComponent } from './rooms/room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomTypesComponent } from './rooms/room-types/room-types.component';
import { RoomTypeComponent } from './rooms/room-types/room-type/room-type.component';

@NgModule({
  declarations: [
    AppComponent,    
    RoomsComponent, TestCComponent, RoomComponent, NavbarComponent, RoomTypesComponent, RoomTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
