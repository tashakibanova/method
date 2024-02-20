import { Swordsman } from '../class/Swordsman';

describe('Класс Swordsman', () => {
    it('Создает объект Swordsman', () => {
      const swordsman = new Swordsman('Имя');
      expect(swordsman).toBeInstanceOf(Swordsman);
    });
  
    it('Проверяет свойства объекта Swordsman', () => {
      const swordsman = new Swordsman('Имя');
      expect(swordsman.name).toBe('Имя');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
    });
  });