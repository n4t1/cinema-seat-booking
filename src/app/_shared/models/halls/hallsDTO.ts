import { IDeserialize } from '@core/models/deserialize.interface';
import { IEmptySpace, IHall, IHalls, ISeats } from './hallsREST.interface';

export class EmptySpaceDTO implements IDeserialize<EmptySpaceDTO, IEmptySpace>, IEmptySpace {
  fromSeat: number;
  emptySpaceNumber: number;

  public deserialize(obj: IEmptySpace): EmptySpaceDTO {
    this.fromSeat = obj.fromSeat;
    this.emptySpaceNumber = obj.emptySpaceNumber;
    return this;
  }
}

export class SeatsDTO implements IDeserialize<SeatsDTO, ISeats>, ISeats {
  seatsPerRowNumber: number;
  emptySpacePerRowNumber: EmptySpaceDTO;

  public deserialize(obj: ISeats): SeatsDTO {
    this.seatsPerRowNumber = obj.seatsPerRowNumber;
    this.emptySpacePerRowNumber = new EmptySpaceDTO().deserialize(obj.emptySpacePerRowNumber);
    return this;
  }
}

export class HallDTO implements IDeserialize<HallDTO, IHall>, IHall {
  id: number;
  layout: ISeats[];

  public deserialize(obj: IHall): HallDTO {
    this.id = obj.id;
    this.layout = [];
    obj.layout.forEach(el => {
      this.layout.push(new SeatsDTO().deserialize(el));
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
