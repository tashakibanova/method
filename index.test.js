import { Character } from './index.js';

describe('Класс Character', () => {
    let character;

    beforeEach(() => {
        character = new Character(1, 10, 10, 100);
    });

    describe('Метод levelUp', () => {
        it('Повышает уровень на 1', () => {
            character.levelUp();
            expect(character.level).toBe(2);
        });

        it('Увеличивает атаку и защиту на 20%', () => {
            character.levelUp();
            expect(character.attack).toBeCloseTo(12);
            expect(character.defence).toBeCloseTo(12);
        });

        it('Устанавливает здоровье на 100', () => {
            character.levelUp();
            expect(character.health).toBe(100);
        });

        it('Не позволяет повысить уровень умершего персонажа', () => {
            character.health = 0;
            expect(() => character.levelUp()).toThrowError('Невозможно повысить уровень умершего');
        });
    });

    describe('Метод damage', () => {
        it('Уменьшает здоровье на указанное количество очков', () => {
            character.damage(10);
            expect(character.health).toBeCloseTo(91);
        });

        it('Учитывает защиту при расчете урона', () => {
            character.damage(10);
            expect(character.health).toBeCloseTo(91);
        });

        it('Не позволяет уменьшить здоровье ниже 0', () => {
            character.health = -1;
            expect(() => character.damage(10)).toThrowError('Здоровье персонажа не может быть меньше 0');
        });
    });
});