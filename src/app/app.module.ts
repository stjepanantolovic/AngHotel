import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TestCComponent } from './test-c/test-c.component';
import { RoomComponent } from './rooms/room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomTypesComponent } from './rooms/room-types/room-types.component';
import { RoomTypeComponent } from './rooms/room-types/room-type/room-type.component';
import { Routes, RouterModule } from '@angular/router';
import { RoomTypeEditComponent } from './rooms/room-types/room-type-edit/room-type-edit.component';

const appRoutes: Routes=[
  {path:'', component:RoomsComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'roomTypes', component:RoomTypesComponent},
  {path:'roomTypes/:id', component:RoomTypeComponent},
]

@NgModule({
  declarations: [
    AppComponent,    
    RoomsComponent, TestCComponent, RoomComponent, NavbarComponent, RoomTypesComponent, RoomTypeComponent, RoomTypeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
