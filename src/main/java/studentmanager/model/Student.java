package studentmanager.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "collegeName")
    private String collegeName;
    @Column(name = "dateOfBirth")
    private LocalDate dateOfBirth;

    public Student(Long id, String firstName, String lastName, String collegeName, LocalDate dateOfBirth) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.collegeName = collegeName;
        this.dateOfBirth = dateOfBirth;
    }

    public Student(String firstName, String lastName, String collegeName, LocalDate dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.collegeName = collegeName;
        this.dateOfBirth = dateOfBirth;
    }

    public Student(){}
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
