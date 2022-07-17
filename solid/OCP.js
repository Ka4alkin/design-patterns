// program's entities should be open to implement and add new features
// but be closed for changing old functionality
// it's a bad solution to change code which has already written because it's tested and works good
// in that way we should do regration testing and make sure that we don't break existing functionality
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Weapon = /** @class */ (function () {
    function Weapon(damage, range) {
        this.damage = damage;
        this.range = range;
    }
    Weapon.prototype.attack = function () {
    };
    return Weapon;
}());
var Character = /** @class */ (function () {
    function Character(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    Character.prototype.changeWeapon = function (newWeapon) {
        this.weapon = newWeapon;
    };
    // дегецая метода атак персонажу
    Character.prototype.attack = function () {
        this.weapon.attack();
    };
    return Character;
}());
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sword.prototype.attack = function () {
        console.log('Удар мечом с уроном ' + this.damage);
    };
    return Sword;
}(Weapon));
var CrossBow = /** @class */ (function (_super) {
    __extends(CrossBow, _super);
    function CrossBow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrossBow.prototype.attack = function () {
        console.log('Удар арбалетом с уроном ' + this.damage);
    };
    return CrossBow;
}(Weapon));
var sword = new Sword(15, 2);
var character = new Character('Warrior', sword);
character.attack();
var crossBow = new CrossBow(20, 5);
character.changeWeapon(crossBow);
character.attack();
//
// character.changeWeapon(crossBow)
//
// character.attack()
var Person = /** @class */ (function () {
    function Person(fullanme) {
        this.fullname = fullanme;
    }
    return Person;
}());
var PersonList = /** @class */ (function () {
    function PersonList(persons) {
        this.persons = persons;
    }
    PersonList.prototype.sort = function () {
        var sortArr = SortClient.sort(this.persons);
        return sortArr;
    };
    return PersonList;
}());
var Music = /** @class */ (function () {
    function Music() {
    }
    return Music;
}());
var MusicList = /** @class */ (function () {
    function MusicList(musics) {
        this.musics = musics;
    }
    MusicList.prototype.sort = function () {
        var sortArr = BubbleSort.sort(this.musics);
        return sortArr;
    };
    return MusicList;
}());
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.sort = function (array) {
        return [];
    };
    return Sort;
}());
var SortClient = /** @class */ (function (_super) {
    __extends(SortClient, _super);
    function SortClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortClient.sort = function (array) {
        if (array.length < 10) {
            return BubbleSort.sort(array);
        }
        else if (array.length < 1000) {
            return MergeSort.sort(array);
        }
        else {
            return QuickSort.sort(array);
        }
    };
    return SortClient;
}(Sort));
var BubbleSort = /** @class */ (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSort.sort = function (array) {
        // console.log(array)
        return array;
    };
    return BubbleSort;
}(Sort));
var QuickSort = /** @class */ (function (_super) {
    __extends(QuickSort, _super);
    function QuickSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSort.sort = function (array) {
        return array;
    };
    return QuickSort;
}(Sort));
var MergeSort = /** @class */ (function (_super) {
    __extends(MergeSort, _super);
    function MergeSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeSort.sort = function (array) {
        return array;
    };
    return MergeSort;
}(Sort));
var person1 = new Person('person1');
var person2 = new Person('person2');
var personList = new PersonList([person1, person2]);
console.log(personList.sort());
