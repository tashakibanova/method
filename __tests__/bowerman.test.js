import { Bowerman } from '../class/Bowerman';

describe('Класс Bowerman', () => {
    it('Создает объект Bowerman', () => {
      const bowerman = new Bowerman('Имя');
      expect(bowerman).toBeInstanceOf(Bowerman);
    });
  
    it('Проверяет свойства объекта Bowerman', () => {
      const bowerman = new Bowerman('Имя');
      expect(bowerman.name).toBe('Имя');
      expect(bowerman.type).toBe('Bowerman');
      expect(bowerman.attack).toBe(25);
      expect(bowerman.defence).toBe(25);
    });
  });