import { Component, OnInit, Input } from '@angular/core';
import { RoomType } from '../room-type.model';
import { RoomTypesService } from '../room-types.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '[app-room-type]',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {
@Input() roomType: RoomType;
@Input() id: number;

  constructor(private roomtypesService: RoomTypesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onSelected(){
    this.roomtypesService.selectedRoomType.emit(this.roomType);
    this.roomtypesService.updateMode.emit(true);
  }

  onDeleteRoomType(index){
    this.roomtypesService.deleteRoomType(index);
  }

  onEditRoomType(id){
    this.roomtypesService.getRoomType(id);
    this.roomtypesService.updateMode.emit(true);
  }

}
