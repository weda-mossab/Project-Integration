import 'package:equatable/equatable.dart';

class Student extends Equatable {
  final int? sid;
  final String student_name;
  final String student_email;
  final String student_gender;
  final DateTime birth_date;
  final int student_phone;
  final String student_class;
  final String student_password;

  const Student({this.sid, required this.student_name, required this.student_email, required this.student_gender, required this.birth_date, required this.student_phone, required this.student_class, required this.student_password});

  @override
  List<Object?> get props => [sid, student_name, student_email, student_gender, birth_date, student_phone, student_class, student_password];
}
