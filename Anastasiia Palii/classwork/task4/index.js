

const person = {
    userName: 'Valerchik',
    age: 23
};

Object.defineProperty(person, 'city', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: 'Boston'
});

console.log(person);


const person1= {
    firstName: 'Iren',
    lastName: 'Smith',
    

    get fullName() {
        return (`${this.firstName} ${this.lastName}`);
    },

    set fullName(name) {
        this.firstName = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
    }
};

//person1.fullName = 'Ivan Ivanov';
//console.log(person1.firstName, person1.lastName);



const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
}

const obj3 = {
    c: 3
}

obj3 =>  obj2 => obj1

const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
};

const obj3 = {
    c: 3
};

Object.setPrototypeOf(obj2, obj1);


Object.setPrototypeOf(obj3, obj2);


console.log(obj3.a); 
console.log(obj3.b); 
console.log(obj3.c); 






