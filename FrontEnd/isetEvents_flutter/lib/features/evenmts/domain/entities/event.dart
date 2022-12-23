import 'package:equatable/equatable.dart';

class Event extends Equatable {
  final int? id;
  final String name;
  final String description;
  final String avatar;
  final DateTime date;

  const Event({this.id, required this.name, required this.description, required this.avatar, required this.date});

  @override
  List<Object?> get props => [id, name, description, avatar, date];
}
