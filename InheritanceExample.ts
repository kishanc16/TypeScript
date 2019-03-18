namespace Inheritance
{
    class Person
    {
        public name:string;
        public surname:string;
        public email:string;
        public constructor(name:string, surname:string,email:string)
        {
            this.email = email;
            this.name = name;
            this.surname = surname;
        }
        public greet()
        {
            console.log("Hi All");
        }
    }
    class Teacher extends Person
    {
        public teach(){
            console.log("Welcome to Node js class");
        }
    }
    
}