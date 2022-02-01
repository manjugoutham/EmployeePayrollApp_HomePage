let empPayrollDataList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollDataList = getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent = empPayrollDataList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ? 
  JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {

const headerHtml =
       "<th>profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        
if(empPayrollDataList.length == 0)return;
let innerHtml = `${headerHtml}`;
for(const employeePayrollData of empPayrollDataList){
innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" src="${employeePayrollData._profilePic}"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>
        
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img name =${employeePayrollData._id} src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img name =${employeePayrollData._id} src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Joe Rich',
        _gender: 'Male',
        _department: [
          'HR',
          'Finance'
        ],
        _salary: 10000000,
        _startDate: '18 Sept 2022',
        _note: 'Test to view from JSON',
        _id: new Date().getTime(),
        _profileImage: '../assets/profile-images/Ellipse -3.png'
      },
      {
        _name: 'Jansi',
        _gender: 'Female',
        _department: [
          'Engineer'
        ],
        _salary: 5000000,
        _startDate: '30 Sept 2022',
        _note: 'Test to view from JSON',
        _id: new Date().getTime(),
        _profileImage: '../assets/profile-images/Ellipse -1.png'
      }
    ];
    return employeePayrollListLocal;
  }
  const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
  }