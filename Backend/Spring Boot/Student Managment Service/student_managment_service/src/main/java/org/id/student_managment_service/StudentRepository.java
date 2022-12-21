package main.java.org.id.student_managment_service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource

public class StudentRepository extends MongoRepository<Student,String> {
    
}
