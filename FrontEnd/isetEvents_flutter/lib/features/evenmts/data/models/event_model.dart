import '../../domain/entities/event.dart';

class EventModel extends Event {
  const EventModel({int? id, required String name, required String description , required String avatar, required DateTime date})
      : super(id: id, name: name,description: description, avatar: avatar, date: date);

  factory EventModel.fromJson(Map<String, dynamic> json) {
    return EventModel(id: json['id'], name: json['name'], description: json['description'], avatar: json['avatar'], date: json['date']);
  }

  Map<String, dynamic> toJson() {
    return {'id': id, 'name': name, 'description': description , 'avatar':avatar, 'date': date};
  }
}
