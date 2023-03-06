export interface Entity<T, V> {
  toObject(): T;
  fillEntity(entity: V): void;
}
