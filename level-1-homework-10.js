// 1)
class Author{
    constructor(name, email, gender){
        this.name = name,
        this.email = email,
        this.gender = gender
    }
    get name() {
        return this._name
    }
    set name(val){
        this._name = val
    }
    get email() {
        return this._email
    }
    set email(val){
        this._email = val
    }
    toString(){
        return `I am ${this.name}`
    }
}

class book extends Author{
    constructor(title, price, quantity){
        super(name, email, gender) 
        this.title = title,
        this.price = price,
        this.quantity = quantity
    }
   
    get title() {
        return this._title
    }
    set title(val){
        this._title = val
    }
    toString(){
        return `This book costs ${this.price}`
    }
    getProfit(){
        return this.price * this.quantity
    }
}

// 2)
class Account{
    constructor(id, name, balance){
        this.#id = Math.floor(Math.random() * 100),
        this.name = name,
        this.balance = balance 
    }
    get name() {
        return this._name
    }
    set name(val){
        this._name = val
    }
    get balance() {
        return this._balance
    }
    set balance(val){
        this._balance = val
    }
    get id() {
        return this.#id
    }
    credit(amount) {
        return this._balance + amount
    }
    debit(amount) {
        if(this._balance > amount){
            return this._balance - amount
        }else{
            return "Amount exceeded balance."
        }
    }
    transferTo(anotherAccount, amount){
        if(this._balance > amount){
            anotherAccount.balance += amount
            return this._balance - amount
        }else{
            return "Amount exceeded balance."
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        return JSON.stringify(accountFirst)===JSON.stringify(accountSecond)
    }
    toString(){
        return `my balance is ${this._balance}`
    }
} 

// 3)
class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.gender = gender,
        this.age = age
    }
    get firstName() {
        return this._firstName
    }
    set firstName(val){
        this._firstName = val
    }
    toString(){
        return `I am ${this._firstName} ${this.lastName}`
    }
}
class Student extends Person{
    constructor(programs, year, fee){
        super(firstName, lastName, gender, age)
        this.programs = ["Biology","Drawing","Chemistry","Geography"],
        this.year = year,
        this.fee = fee
    }
    get fee() {
        return this._fee
    }
    set fee(val){
        this._fee = val
    }
    
    grade = {
        "Biology": 0,
        "Drawing": 0,
        "Chemistry": 0,
        "Geography": 0
    }
    passExam(grade){
        grades = Object.values(grade)
        sumOfGrades = grades.reduce((sum,acc)=>sum + acc)
        if(sumOfGrades > 50){
            this.year += 1
        }
    }
}


class Teacher{
    constructor(programs, pay){
        super(program, pay)
        this.program = "to teach students",
        this.pay = pay
    }
    get program() {
        return this._program
    }
    set program(val){
        this._program = val
    }
    toString(){
        return "I am a teacher"
    }
}