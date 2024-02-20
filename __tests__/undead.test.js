import { Undead } from '../class/Undead';

describe('Класс Undead', () => {
    it('Создает объект Undead', () => {
      const undead = new Undead('Имя');
      expect(undead).toBeInstanceOf(Undead);
    });
  
    it('Проверяет свойства объекта Undead', () => {
      const undead = new Undead('Имя');
      expect(undead.name).toBe('Имя');
      expect(undead.type).toBe('Undead');
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });
  });