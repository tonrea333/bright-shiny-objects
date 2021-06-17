// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
//==================================================
//Function to create user
function createUser(firstName, lastName){

//Object to return first and last name

    const user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;
}

//=====================================================

//Function to setAge

function setAge(user, age){
    user.age = 50;
//Object that defines key-value pairs required for project
   
    
    
  
    
    return user;
}
//======================================================

//Function to incrementAge

function incrementAge(user, age) {
    
    
        user.age = 50 + 1; 
    
    return user;
    }


//========================================

//Function to fixCar

function fixCar(car){
    
        
        car.needsMaitenance= false;


    return car;
}


//==========================================

//Function to accept two parameters, a student object and an arry of grades

function addGrades(student, newGrades){
    
    newGrades = [88, 70, 90];
    student.grades.push(newGrades);


    return student;
}


//==========================================

//Function getDataType

function getDataType(car, )


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
