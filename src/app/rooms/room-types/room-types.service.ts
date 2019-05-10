import { EventEmitter } from '@angular/core';
import { RoomType } from './room-type.model';

export class RoomTypesService {
    selectedRoomType = new EventEmitter<RoomType>();
    updatedRoomTypes = new EventEmitter<RoomType[]>();
    roomTypes: RoomType[] = [
        new RoomType(1, 'Classsic', 100),
        new RoomType(2, 'Classsic Sea View', 150),
        new RoomType(3, 'Familly Suite', 200),
        new RoomType(4, 'Familly Suite Sea View', 250),
        new RoomType(5, 'Exclusive Suite', 300),
        new RoomType(6, 'Exclusive Suite Sea View', 350),
    ]
    getRoomTypes() {
        return this.roomTypes.slice();
    }
    deleteRoomType(index) {
        this.roomTypes.splice(index, 1);
        this.updatedRoomTypes.emit(this.roomTypes);
    }

    addRoomType(roomType: RoomType) {
        this.roomTypes.push(roomType);
        this.updatedRoomTypes.emit(this.roomTypes);
    }

}