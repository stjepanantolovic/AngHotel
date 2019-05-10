import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoomTypesService } from './room-types.service';
import { RoomType } from './room-type.model';
import { Room } from '../room.model';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css'],
  providers: [RoomTypesService]
})
export class RoomTypesComponent implements OnInit {
  roomTypes: RoomType[];
  @ViewChild('roomTpName') roomTypeNameRef: ElementRef;
  @ViewChild('roomPrc') roomPriceRef: ElementRef;
  selectedRoomType: RoomType;
  updateMode = false;

  constructor(private roomTypesService: RoomTypesService) { }

  ngOnInit() {
    this.roomTypes = this.roomTypesService.getRoomTypes();
    this.roomTypesService.updatedRoomTypes
      .subscribe(
        (roomTypes: RoomType[]) => (this.roomTypes = roomTypes)
      );
    this.selectedRoomType = new RoomType(null, '', null);
    this.roomTypesService.selectedRoomType
      .subscribe(
        (roomType: RoomType) => (this.selectedRoomType = roomType)
      )
      this.updateMode = false;
    this.roomTypesService.updateMode
      .subscribe(
        (updateMode: boolean) => (this.updateMode = updateMode)
      )
  }

  onAddItem(roomType: RoomType) {
    this.roomTypesService.addRoomType(roomType);
  }

  onUpdateItem(roomType: RoomType) {    
    this.selectedRoomType.roomTypeName=roomType.roomTypeName;
    this.selectedRoomType.roomTypePrice=roomType.roomTypePrice;
    this.clearForm();
  }
  
  onProcess() {
    const rmTypeName = this.roomTypeNameRef.nativeElement.value;
    const rmPrice = this.roomPriceRef.nativeElement.value;
    const rTID = this.roomTypes[(this.roomTypes.length - 1)].id + 1;
    const newRoomType = new RoomType(rTID, rmTypeName, rmPrice);
    if (this.updateMode) {
      this.onUpdateItem(newRoomType);
    }
    else {
      this.onAddItem(newRoomType);
    }
  }
  
  clearForm(){
    this.roomTypeNameRef.nativeElement.value='';
    this.roomPriceRef.nativeElement.value=0;
    this.updateMode=false;
    this.roomTypesService.updateMode.emit(false);
  }
}
