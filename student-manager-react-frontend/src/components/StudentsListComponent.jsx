import React from 'react'
import { useEffect, useState } from 'react'
import StudentsService from '../services/StudentsService'
import { useNavigate } from "react-router-dom";

export const StudentsListComponent = () => {

    let navigate = useNavigate();
    const [students, setStudents] = useState([]);

    function addStudent(){
        navigate("/addStudent", {state: {studId: -1}})    
    }

    function editStudent(id){
        navigate("/addStudent", {state: {studId: id}})    
    }

    function deleteStudent(id){
        StudentsService.deleteStudent(id).then(setStudents(students.filter(stud => stud.id !== id)))
    }

    useEffect(() => {

        let fetchStudents = async () => {
            await StudentsService.getStudents().then(resp => { setStudents(resp.data) });
        }

        fetchStudents()
    }, [])

    return (
        <div>
            <h1>Students Manager</h1>
            <button className='addButton' onClick={addStudent}>Add Student</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Date of birth</th>
                        <th> Options </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map(
                            stud =>
                                <tr key={stud.id}>
                                    <th>{stud.id}</th>
                                    <th>{stud.firstName + " " + stud.lastName}</th>
                                    <th>{stud.collegeName}</th>
                                    <th>{stud.dateOfBirth}</th>
                                    <th>
                                        <button className='editButton' onClick={() => editStudent(stud.id)}>Edit</button>
                                        <button className='deleteButton' onClick={() => deleteStudent(stud.id)}>Delete</button>
                                    </th>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
