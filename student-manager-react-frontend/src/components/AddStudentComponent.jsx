import React from 'react'
import StudentsService from '../services/StudentsService'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'

export const AddStudentComponent = (props) => {

    let navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state.studId != -1) {
            StudentsService.getStudentById(location.state.studId).then(res => {
                let student = res.data
                document.getElementById('addFirstName').value = student.firstName
                document.getElementById('addLastName').value = student.lastName
                document.getElementById('addCollegeName').value = student.collegeName
                document.getElementById('addDateOfBirth').value = student.dateOfBirth
            })
        }
    })


    function saveStudentToDatabase() {
        let result = areInputsValid()
        if (result) {
            if (location.state.studId == -1) {
                StudentsService.addStudent(result).then(res => { navigate('/') })
            } else {
                StudentsService.updateStudent(result, location.state.studId).then(res => { navigate('/') })
            }

        } else {
            alert("Inputs are not correct")
        }

    }

    function areInputsValid() {
        let inputFirstName = document.getElementById('addFirstName').value.trim()
        let inputLastName = document.getElementById('addLastName').value.trim()
        let inputCollegeName = document.getElementById('addCollegeName').value.trim()
        let inputDateOfBirth = document.getElementById('addDateOfBirth').value


        if (inputFirstName.length < 3 ||
            inputLastName.length < 3 ||
            inputCollegeName.length < 2 ||
            inputFirstName.type != undefined) {
            return false;
        }
        let studAsJson = JSON.stringify({
            id: parseInt((Math.random() * (999999 - 10 + 1)), 10) + 10,
            firstName: inputFirstName,
            lastName: inputLastName,
            collegeName: inputCollegeName,
            dateOfBirth: Date.parse(inputDateOfBirth)
        })
        // alert(studAsJson) 
        return {
            firstName: inputFirstName,
            lastName: inputLastName,
            collegeName: inputCollegeName,
            dateOfBirth: inputDateOfBirth
        };
    }

    return (
        <div>
            <h1>{location.state.studId == -1 ? 'Add Student Form' : 'Edit Student Form' }</h1>
            <br />
            <input id='addFirstName' type="text" placeholder="First Name"></input>
            <br />
            <input id='addLastName' type="text" placeholder="Last Name"></input>
            <br />
            <input id='addCollegeName' type="text" placeholder="College"></input>
            <br />
            <input id='addDateOfBirth' type="date" placeholder="Date of birth"></input>
            <div className="footer">
                <button type="button" onClick={saveStudentToDatabase}>{location.state.studId == -1 ? 'Add' : 'Edit' }</button>
            </div>
        </div>
    )
}
