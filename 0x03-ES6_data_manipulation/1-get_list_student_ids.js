const getListStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
];

let studentsIdList = getListStudents.map(({ id }) => id);
console.log(studentsIdList);