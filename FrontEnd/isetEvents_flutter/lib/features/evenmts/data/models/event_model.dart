import '../../domain/entities/event.dart';

class EventModel extends Event {
  const EventModel({int? id, required String title, required String body})
      : super(id: id, title: title, body: body);

  factory EventModel.fromJson(Map<String, dynamic> json) {
    return EventModel(id: json['id'], title: json['title'], body: json['body']);
  }

  Map<String, dynamic> toJson() {
    return {'id': id, 'title': title, 'body': body};
  }
}
