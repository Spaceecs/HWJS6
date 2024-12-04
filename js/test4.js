class Classroom {
    constructor(name, seats, department) {
        this.name = name;
        this.seats = seats;
        this.department = department;
    }
}
class Group {
    constructor(name, students, department) {
        this.name = name;
        this.students = students;
        this.department = department;
    }
}
const classrooms = [
    new Classroom('101', 15, 'Physics'),
    new Classroom('102', 20, 'Mathematics'),
    new Classroom('103', 12, 'Computer Science'),
    new Classroom('104', 18, 'Biology'),
    new Classroom('105', 10, 'History')
];
function displayAllClassrooms() {
    let message = 'List of all classrooms:\n';
    classrooms.forEach(classroom => {
        message += `Name: ${classroom.name}, Seats: ${classroom.seats}, Department: ${classroom.department}\n`;
    });
    alert(message);
}
function displayClassroomsByDepartment(department) {
    let message = `Classrooms for the "${department}" department:\n`;
    classrooms.filter(classroom => classroom.department === department)
        .forEach(classroom => {
            message += `Name: ${classroom.name}, Seats: ${classroom.seats}\n`;
        });
    alert(message);
}
function displayClassroomsForGroup(group) {
    let message = `Classrooms suitable for group "${group.name}":\n`;
    classrooms.filter(classroom => classroom.seats >= group.students && classroom.department === group.department)
        .forEach(classroom => {
            message += `Name: ${classroom.name}, Seats: ${classroom.seats}\n`;
        });
    alert(message);
}
function sortClassroomsBySeats() {
    classrooms.sort((a, b) => a.seats - b.seats);
    let message = 'Classrooms sorted by number of seats:\n';
    classrooms.forEach(classroom => {
        message += `Name: ${classroom.name}, Seats: ${classroom.seats}, Department: ${classroom.department}\n`;
    });
    alert(message);
}
function sortClassroomsByName() {
    classrooms.sort((a, b) => a.name.localeCompare(b.name));
    let message = 'Classrooms sorted by name:\n';
    classrooms.forEach(classroom => {
        message += `Name: ${classroom.name}, Seats: ${classroom.seats}, Department: ${classroom.department}\n`;
    });
    alert(message);
}
const group = new Group('Group A', 12, 'Physics');
displayAllClassrooms();
displayClassroomsByDepartment('Physics');
displayClassroomsForGroup(group);
sortClassroomsBySeats();
sortClassroomsByName();
