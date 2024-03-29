var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inheritance;
(function (Inheritance) {
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
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Teacher.prototype.teach = function () {
            console.log("Welcome to Node js class");
        };
        return Teacher;
    }(Person));
})(Inheritance || (Inheritance = {}));
