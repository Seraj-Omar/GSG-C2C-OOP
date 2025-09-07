function Student(name, age, grade) {
    this.name = name;
    this.age = age;

    let _grade;

    const isValid = (g) => g === 'A' || g === 'F';

    if (isValid(grade))
        _grade = grade;
    else {
        console.log("Invalid grade");
        _grade = 'F';
    }

    this.getGrade = function () {
        return _grade;
    };

    this.setGrade = function (newGrade) {
        if (isValid(newGrade))
            _grade = newGrade;
        else
            console.log("Invalid grade");
    };
}

Student.prototype.introduce = function () {
    console.log(
        `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGrade()}.`
    );
};

let studentObj = new Student('Ali', 20, 'A');
studentObj.introduce();

studentObj.setGrade('B');
studentObj.setGrade('F'); 
studentObj.introduce();
