import { Room } from './room.model';
import { EventEmitter } from '@angular/core';

export class RoomsService {
    selectedRoom = new EventEmitter<Room>();
    updatedRooms = new EventEmitter<Room[]>();
    rooms: Room[] = [
        new Room(1, 101, 'Classsic', 100),
        new Room(2, 102, 'Classsic Sea View', 150),
        new Room(3, 201, 'Familly Suite', 200),
        new Room(4, 202, 'Familly Suite Sea View', 250),
        new Room(5, 301, 'Exclusive Suite', 300),
        new Room(6, 302, 'Exclusive Suite Sea View', 350),
    ]
    getRooms() {
        return this.rooms.slice();
    }
    deleteRoom(index) {
        this.rooms.splice(index, 1);
        this.updatedRooms.emit(this.rooms);
    }

    addRoom(room: Room) {
        this.rooms.push(room);
        this.updatedRooms.emit(this.rooms);
    }

}