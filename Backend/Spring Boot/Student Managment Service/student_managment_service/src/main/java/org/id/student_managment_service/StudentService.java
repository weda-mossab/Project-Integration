package main.java.org.id.student_managment_service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StudentService {
    StudentRepository studentRepository;

    public List<Student> findAll(){
        return studentRepository.findAll();
    }

    public Event findbyId(String sid){
        Optional<Student> std = studentRepository.findById(sid);
        return std.get(); 
    }

    public void save(Student student) {
        studentRepository.save(student);
    }

    public void delete(Student student) {
        Student.delete(student);
    }  
}
