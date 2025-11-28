// Program 1: Welcome based on city
let city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}
// Program 2: Greeting based on gender
let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
} else {
    alert("Good Morning");
}
// Program 3: Traffic signal color
let color = prompt("Enter traffic signal color (Red/Yellow/Green):");

if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (color.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}
// Program: Check remaining fuel
let fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}
// Program: Check condition for variable a
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}
// Program: Calculate percentage and grade

// Input marks for three subjects
let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

// Input total marks
let totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate total obtained marks
let obtainedMarks = subject1 + subject2 + subject3;

// Calculate percentage
let percentage = (obtainedMarks / totalMarks) * 100;

// Display percentage
alert("Percentage: " + percentage.toFixed(2) + "%");

// Compute grade based on percentage
let grade, remarks;

if (percentage >= 80 && percentage <= 100) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70 && percentage < 80) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60 && percentage < 70) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
} else {
    grade = "Invalid";
    remarks = "Check your marks input";
}

// Display grade and remarks
alert("Grade: " + grade + "\nRemarks: " + remarks);
