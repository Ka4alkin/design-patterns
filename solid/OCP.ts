// program's entities should be open to implement and add new features
// but be closed for changing old functionality
// it's a bad solution to change code which has already written because it's tested and works good
// in that way we should do regration testing and make sure that we don't break existing functionality

interface Attacker {
    attack: () => void
}

class Weapon implements Attacker {
    damage: number
    range: number

    constructor(damage: number, range: number) {
        this.damage = damage
        this.range = range
    }

    attack() {
    }
}


class Character {
    name: string
    weapon: Weapon

    constructor(name: string, weapon: Weapon) {
        this.name = name
        this.weapon = weapon
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon
    }

    // дегецая метода атак персонажу
    attack() {
        this.weapon.attack()
    }
}

class Sword extends Weapon {
    attack() {
        console.log('Удар мечом с уроном ' + this.damage)
    }
}

class CrossBow extends Weapon {
    attack() {
        console.log('Удар арбалетом с уроном ' + this.damage)
    }
}

const sword = new Sword(15, 2)

const character = new Character('Warrior', sword)
character.attack()
const crossBow = new CrossBow(20, 5)
character.changeWeapon(crossBow)
character.attack()


//
// character.changeWeapon(crossBow)
//
// character.attack()

class Person {
    fullname: string

    constructor(fullanme: string) {
        this.fullname = fullanme
    }

}

class PersonList {
    persons: Person[]

    constructor(persons: Person[]) {
        this.persons = persons
    }

    sort() {
        let sortArr = SortClient.sort(this.persons)
        return sortArr
    }
}

class Music {

}

class MusicList {
    musics: Music[]

    constructor(musics: Music[]) {
        this.musics = musics
    }

    sort() {
        let sortArr = BubbleSort.sort(this.musics)
        return sortArr
    }
}

class Sort {
    public static sort(array: any[]): any {
        return []
    }
}

class SortClient extends Sort {
    public static sort(array: any[]): any[] {
        if (array.length < 10) {
            return BubbleSort.sort(array)
        } else if (array.length < 1000) {
            return MergeSort.sort(array)
        } else {
            return QuickSort.sort(array)
        }
    }
}

class BubbleSort extends Sort {
    public static sort(array: any[]): any[] {
        // console.log(array)
        return array
    }
}

class QuickSort extends Sort {
    public static sort(array: any[]): any[] {
        return array
    }
}

class MergeSort extends Sort {
    public static sort(array: any[]): any[] {
        return array
    }
}


const person1 = new Person('person1')
const person2 = new Person('person2')

const personList = new PersonList([person1, person2])

console.log(personList.sort())