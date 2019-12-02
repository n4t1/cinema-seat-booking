export interface IDeserialize<T, I> {
  deserialize(obj: I): T;
}