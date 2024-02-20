import { Magician } from '../class/Magician';

describe('Класс Magician', () => {
    it('Создает объект Magician', () => {
      const magician = new Magician('Имя');
      expect(magician).toBeInstanceOf(Magician);
    });
  
    it('Проверяет свойства объекта Magician', () => {
      const magician = new Magician('Имя');
      expect(magician.name).toBe('Имя');
      expect(magician.type).toBe('Magician');
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });
  });