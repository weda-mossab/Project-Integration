package org.id.student_managment_service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/student")

public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping
    public List<Student> getStudents(){
    return studentService.findAll();
    }
    @GetMapping(value="/{sid}")
    public Student getStudent(@PathVariable String sid){
    return studentService.findbyId(sid);
    }

    // @PostMapping(value="/add")
    // public Event saveEvent(@RequestBody @Valid Event event, BindingResult result){
    //     System.out.println(result);
    //     eventService.save(event);
    //     return event; 
    // }

    @DeleteMapping(value="/delete_student")
    public Student deleteStudent(@RequestBody Student studentDetails){
        Student student = studentService.findbyId(studentDetails.getSid());
        studentService.delete(student);
        return student;
    }

    @PutMapping(value="/update_student")
    public Student updateStudent(@RequestBody Student studentDetails){
        
        Student student =studentService.findbyId(studentDetails.getSid());
        
        student.setStudent_name(studentDetails.getStudent_name());
        student.setBirth_date(studentDetails.getBirth_date());
        student.setStudent_phone(studentDetails.getStudent_phone());
        student.setStudent_password(studentDetails.getStudent_password());
        student.setStudent_class(studentDetails.getStudent_class());
        studentService.save(student);
        
        return student;
    }
}
