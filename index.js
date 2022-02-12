class User {
  country = "Ukraine"
  colorSkin = "white"
  constructor(name = ' Enter your name', surname = ' Enter your surname', birthday = ' Enter your birthday', salary = ' Enter your salary') {
    this.name = name
    this.surname = surname
    this.birthday = birthday
    this.salary = salary
  }
  humanName() {
    console.log(this.name + this.surname)
  }
  humanAge() {
    console.log(this.birthday)
  }
  get salary() {
    return this.salary
  }
  set salary(value) {
    if (value > this.salary) {
      this.salary = value
    } else {
      cosole.log('Error')
    }
  }
}

const user = new User()

