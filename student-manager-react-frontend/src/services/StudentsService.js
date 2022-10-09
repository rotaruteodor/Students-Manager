import axios from 'axios'

const STUDENTS_MAIN_URL = "http://localhost:8080/api/v1/students";
const STUDENTS_ADD_URL = "http://localhost:8080/api/v1/addStudent"

class StudentsService {

    getStudents(){
        return axios.get(STUDENTS_MAIN_URL);
    }

    addStudent(student){
        return axios.post(STUDENTS_ADD_URL, student);
    }

    getStudentById(id){
        return axios.get(STUDENTS_MAIN_URL + '/' + id);
    }

    updateStudent(student, id){
        return axios.put(STUDENTS_MAIN_URL + '/' +   id, student);
    }

    deleteStudent(id){
        return axios.delete(STUDENTS_MAIN_URL + '/' + id);
    }
}

export default new StudentsService()