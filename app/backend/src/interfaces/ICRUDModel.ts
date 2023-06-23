import { ID, NewEntity } from '.';

export interface ICRUDModelCreator<T> {
  create(data: NewEntity<T>): Promise<T>,
}

export interface ICRUDModelReader<T> {
  findAll(): Promise<T[]>,
  findById(id: ID): Promise<T | null>,
}

// export interface ICRUDModelUpdater<T> {
//   update(id: ID, data: Partial<T>): Promise<T | null>,
// }

// export interface ICRUDModelDeleter {
//   delete(id: ID): Promise<number>,
// }

// export interface ICRUDMoelSearch<T> {
//   findByQuery(q: string): Promise<T[]>;
// }

export interface ICRUDModel<T>
  extends ICRUDModelCreator<T>, ICRUDModelReader<T> {}
