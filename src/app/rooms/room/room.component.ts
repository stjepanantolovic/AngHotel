import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';
import { RoomsService } from '../rooms.service';

@Component({
  selector: '[app-room]',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
@Input() room: Room;
@Input() id: number;

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {   
  }

  onSelected(){
    this.roomsService.selectedRoom.emit(this.room);
  }
 
  onDeleteRoom(index){
    this.roomsService.deleteRoom(index);
  }
}
