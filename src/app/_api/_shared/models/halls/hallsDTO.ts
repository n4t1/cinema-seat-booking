import { IEmptySpace, IHall, IHalls, ISeatsRows } from './hallsREST.interface';
import { IDeserialize } from '@api/core';

export class EmptySpaceDTO implements IDeserialize<EmptySpaceDTO, IEmptySpace>, IEmptySpace {
  fromSeat: number;
  emptySpaceNumber: number;

  public deserialize(obj: IEmptySpace): EmptySpaceDTO {
    this.fromSeat = obj.fromSeat;
    this.emptySpaceNumber = obj.emptySpaceNumber;
    return this;
  }
}

export class SeatsRowsDTO implements IDeserialize<SeatsRowsDTO, ISeatsRows>, ISeatsRows {
  seatsPerRowNumber: number;
  emptySpacePerRowNumber?: EmptySpaceDTO;

  public deserialize(obj: ISeatsRows): SeatsRowsDTO {
    this.seatsPerRowNumber = obj.seatsPerRowNumber;
    this.emptySpacePerRowNumber = (obj.emptySpacePerRowNumber != undefined) ?
      new EmptySpaceDTO().deserialize(obj.emptySpacePerRowNumber) : null;
    return this;
  }
}

export class HallDTO implements IDeserialize<HallDTO, IHall>, IHall {
  id: number;
  rows: SeatsRowsDTO[];

  public deserialize(obj: IHall): HallDTO {
    this.id = obj.id;
    this.rows = [];
    obj.rows.forEach(el => {
      this.rows.push(new SeatsRowsDTO().deserialize(el));
    });
    return this;
  }
}

export class HallsDTO implements IDeserialize<HallsDTO, IHalls>, IHalls {
  halls: HallDTO[];

  public deserialize(obj: IHalls): HallsDTO {
    this.halls = [];
    obj.halls.forEach(el => {
      this.halls.push(new HallDTO().deserialize(el));
    });
    return this;
  }
}
