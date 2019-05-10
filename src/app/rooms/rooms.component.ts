import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Room } from './room.model';
import { RoomsService } from './rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomType } from './room-types/room-type.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers:[RoomsService]

})
export class RoomsComponent implements OnInit {
rooms: Room[];
@ViewChild('roomTpName')roomTypeNameRef: ElementRef;
@ViewChild('roomNr')roomNumberRef: ElementRef;
@ViewChild('roomPrc')roomPriceRef: ElementRef;

constructor(private roomsService: RoomsService, 
  private router:Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.rooms= this.roomsService.getRooms();
    this.roomsService.updatedRooms
    .subscribe(
      (rooms:Room[])=>(this.rooms=rooms)
    );    
  }

  onAddItem(){
   const rmTypeName = this.roomTypeNameRef.nativeElement.value;
   const rmNumber = this.roomNumberRef.nativeElement.value;
   const rmPrice = this.roomPriceRef.nativeElement.value;
   const rmID= this.rooms[(this.rooms.length-1)].id+1;
   const newRoom = new Room(rmID, rmNumber, rmTypeName, rmPrice);
   this.roomsService.addRoom(newRoom);
  }
  onReload(){
    this.router.navigate(['rooms'], {relativeTo:this.route});
  }

}
