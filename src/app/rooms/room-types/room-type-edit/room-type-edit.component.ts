import { Component, OnInit } from '@angular/core';
import { RoomType } from '../room-type.model';
import { RoomTypesService } from '../room-types.service';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.css']
})
export class RoomTypeEditComponent implements OnInit {
roomtype:RoomType;
currentName='';
currentPrice= '';

  constructor(private roomTypesService: RoomTypesService) { }

  ngOnInit() {
    this.roomtype=this.roomTypesService.getRoomType(1);
    this.currentName=this.roomtype.roomTypeName;
    this.currentPrice=this.roomtype.roomTypePrice.toString();
  }

  onUpdateRT(){
    
  }

}
