import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../room-type.model';
import { RoomTypesService } from '../room-types.service';

@Component({
  selector: '[app-room-type]',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {
@Input() roomType: RoomType;
@Input() id: number;

  constructor(private roomtypesService: RoomTypesService) { }

  ngOnInit() {
  }

  onSelected(){
    this.roomtypesService.selectedRoomType.emit(this.roomType);
  }

  onDeleteRoomType(index){
    this.roomtypesService.deleteRoomType(index);
  }

}
