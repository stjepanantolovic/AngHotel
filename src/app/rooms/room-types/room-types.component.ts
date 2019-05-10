import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoomTypesService } from './room-types.service';
import { RoomType } from './room-type.model';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css'],
  providers:[RoomTypesService]
})
export class RoomTypesComponent implements OnInit {
  roomTypes: RoomType[];
  @ViewChild('roomTpName')roomTypeNameRef: ElementRef;  
  @ViewChild('roomPrc')roomPriceRef: ElementRef;

  constructor(private roomTypesService: RoomTypesService) { }

  ngOnInit() {
    this.roomTypes=this.roomTypesService.getRoomTypes();
    this.roomTypesService.updatedRoomTypes
    .subscribe(
      (roomTypes:RoomType[])=>(this.roomTypes=roomTypes)
    );
  }

  onAddItem(){
    const rmTypeName = this.roomTypeNameRef.nativeElement.value;
    
    const rmPrice = this.roomPriceRef.nativeElement.value;
    const rTID= this.roomTypes[(this.roomTypes.length-1)].id+1;
    const newRoomType = new RoomType(rTID, rmTypeName, rmPrice);
    this.roomTypesService.addRoomType(newRoomType);
   }

}
