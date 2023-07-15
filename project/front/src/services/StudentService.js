import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/app/')
    .then(response => response.data)
}

export function getCreators() {
  return axios.get('http://127.0.0.1:8000/creator/')
    .then(response => response.data)
}

export function getStudentsbyId(studentID) {
  return axios.get('http://127.0.0.1:8000/app/'+ studentID +'/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete('http://127.0.0.1:8000/app/' + studentId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/app/', {
    studentId:null,
    Fname:student.Fname.value,
    Sname:student.Sname.value,
    email:student.email.value,
    date:student.date.value,
    head:student.Title.value,
    memory:student.memory.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/app/' + stuid + '/', {
    Fname:student.Fname.value,
    Sname:student.Sname.value,
    email:student.email.value,
    date:student.date.value,
    head:student.Title.value,
    memory:student.memory.value
  })
   .then(response => response.data)
}

