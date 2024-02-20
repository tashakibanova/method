import { Zombie } from '../class/Zombie';

describe('Класс Zombie', () => {
    it('Создает объект Zombie', () => {
      const zombie = new Zombie('Имя');
      expect(zombie).toBeInstanceOf(Zombie);
    });
  
    it('Проверяет свойства объекта Zombie', () => {
      const zombie = new Zombie('Имя');
      expect(zombie.name).toBe('Имя');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
    });
  });