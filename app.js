const employeeList = [
    {name: 'Jane Smith', position: 'Illustrator & Graphic Designer', age: 27},
    {name: 'Maria Johnson', position: 'Web Designer', age: 25},
    {name: 'Christine Samson', position: 'Software Engineer', age: 26}
]
const employees = employeeList
employees.forEach((employee) => {
    const container = document.querySelector('.container')
    const markup = `
        <ul>
            <li><strong>Name: ${employee.name}</strong></li>
            <li>Position: ${employee.position}</li>
            <li>Age: ${employee.age}</li>
        </ul>
    `
    container.insertAdjacentHTML('afterbegin', markup)
    console.log(employee)
})