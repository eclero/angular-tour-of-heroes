import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Jocker' },
      { id: 2, name: 'Skull' },
      { id: 3, name: 'Panther' },
      { id: 4, name: 'Mona' },
      { id: 5, name: 'Fox' },
      { id: 6, name: 'Queen' },
      { id: 7, name: 'Navi' },
      { id: 8, name: 'Noir' },
      { id: 9, name: 'Crow' }
    ];
    return {heroes};
  }
}
