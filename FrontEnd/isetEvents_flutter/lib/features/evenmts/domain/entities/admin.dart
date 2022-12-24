import 'package:equatable/equatable.dart';

class Admin extends Equatable {
  final int? aid;
  final String admin_name;
  final String admin_email;
  final String admin_gender;
  final DateTime birth_date;
  final int admin_phone;
  final String admin_dep;
  final String admin_password;

  const Admin({this.aid, required this.admin_name, required this.admin_email, required this.admin_gender, required this.birth_date, required this.admin_phone, required this.admin_dep, required this.admin_password});

  @override
  List<Object?> get props => [aid, admin_name, admin_email, admin_gender, birth_date, admin_phone, admin_dep, admin_password];
}
