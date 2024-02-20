import { Daemon } from '../class/Daemon';

describe('Класс Daemon', () => {
    it('Создает объект Daemon', () => {
      const daemon = new Daemon('Имя');
      expect(daemon).toBeInstanceOf(Daemon);
    });
  
    it('Проверяет свойства объекта Daemon', () => {
      const daemon = new Daemon('Имя');
      expect(daemon.name).toBe('Имя');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
    });
  });
