package studentmanager.controller;

import studentmanager.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studentmanager.repository.StudentsRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class StudentsController {

    @Autowired
    private StudentsRepository studentsRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentsRepository.findAll();
    }
}
