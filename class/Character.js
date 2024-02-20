export class Character {
    constructor(name, type) {
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя персонажа должно быть от 2 до 10 символов');
          }
          if (types.indexOf(type) === -1) {
            throw new Error('Тип персонажа должен быть одним из: ' + types);
          }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
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