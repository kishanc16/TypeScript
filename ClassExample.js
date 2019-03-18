var classes_demo;
(function (classes_demo) {
    var Person = /** @class */ (function () {
        function Person(name, surname, email) {
            this.email = email;
            this.name = name;
            this.surname = surname;
        }
        Person.prototype.greet = function () {
            console.log("Hi All");
        };
        return Person;
    }());
    var person = new Person("Ram", "Prasad", "prasad56@gmail.com");
    person.greet();
})(classes_demo || (classes_demo = {}));
