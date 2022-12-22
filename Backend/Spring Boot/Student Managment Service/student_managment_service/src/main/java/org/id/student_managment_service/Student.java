package org.id.student_managment_service;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Document("student")
@Data
@Getter
@Setter

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String sid;

    @NotEmpty(message= "student name is empty")
    @NotNull(message= "student name is null")
    private String student_name;

    @NotEmpty(message= "student email is empty")
    @NotNull(message= "student email is null")
    private String student_email;

    @NotEmpty(message= "student gender is empty")
    @NotNull(message= "student gender is null")
    private String student_gender;

    @NotNull(message= "Bithd_Date is null")
    @JsonFormat(shape = JsonFormat.Shape.STRING , pattern = "yyyy-MM-dd")
    private Date Birth_date;

    @NotEmpty(message= "student Phone Number is empty")
    @NotNull(message= "student Phone Number is null")
    private int student_phone;


    @NotEmpty(message= "student class is empty")
    @NotNull(message= "student class is null")
    private String student_class;

    @NotEmpty(message= "student password is empty")
    @NotNull(message= "student password is null")
    private String student_password;


    public Student(){
        super();
    }

    public Student(String sid,String student_name,Date Birth_date, int student_phone, String student_password, String student_class){
        super();
        this.sid=sid;
        this.student_name=student_name;
        this.Birth_date=Birth_date;
        this.student_phone=student_phone;
        this.student_password=student_password;
        this.student_class= student_class;
    }

    public static void delete(Student student) {
    }
}
