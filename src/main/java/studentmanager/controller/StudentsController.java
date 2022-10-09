package studentmanager.controller;

import jdk.swing.interop.SwingInterOpUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studentmanager.exception.ResourceNotFoundException;
import studentmanager.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import studentmanager.repository.StudentsRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentsController {

    @Autowired
    private StudentsRepository studentsRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentsRepository.findAll();
    }

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student){
        return studentsRepository.save(student);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id:"
                        .concat(id.toString())
                        .concat("doesn't exist")));
        return ResponseEntity.ok(student);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student){
        Student currStudent = studentsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id:"
                        .concat(id.toString())
                        .concat("doesn't exist")));

        currStudent.setFirstName(student.getFirstName());
        currStudent.setLastName(student.getLastName());
        currStudent.setCollegeName(student.getCollegeName());
        currStudent.setDateOfBirth(student.getDateOfBirth());

        Student updatedStudent = studentsRepository.save(currStudent);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
        Student student = studentsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id:"
                        .concat(id.toString())
                        .concat("doesn't exist")));
        System.out.println(student);
        studentsRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
