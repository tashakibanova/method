export class Character {
    constructor(level, attack, defence, health) {
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }

    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.attack += this.attack  *  0.2;
            this.defence += this.defence  *  0.2;
            this.health = 100;
        } else {
            throw new Error("Невозможно повысить уровень умершего");
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points  *  (1 - this.defence / 100);
        } else {
            throw new Error("Здоровье персонажа не может быть меньше 0");
        }
    }
}