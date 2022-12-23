import 'package:equatable/equatable.dart';

class Event extends Equatable {
  final int? id;
  final String title;
  final String body;

  const Event({this.id, required this.title, required this.body});

  @override
  List<Object?> get props => [id, title, body];
}
