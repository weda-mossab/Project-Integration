import 'dart:convert';

import '../../../../core/error/exceptions.dart';
import '../models/event_model.dart';
import 'package:dartz/dartz.dart';
import 'package:http/http.dart' as http;

abstract class EventRemoteDataSource {
  Future<List<EventModel>> getAllEvents();
  Future<Unit> deleteEvent(int eventId);
  Future<Unit> updateEvent(EventModel eventModel);
  Future<Unit> addEvent(EventModel eventModel);
}

const BASE_URL = "https://jsonplaceholder.typicode.com/";

class EventRemoteDataSourceImpl implements EventRemoteDataSource {
  final http.Client client;

  EventRemoteDataSourceImpl({required this.client});
  @override
  Future<List<EventModel>> getAllEvents() async {
    final response = await client.get(
      Uri.parse(BASE_URL + "/events/"),
      headers: {"Content-Type": "application/json"},
    );

    if (response.statusCode == 200) {
      final List decodedJson = json.decode(response.body) as List;
      final List<EventModel> eventModels = decodedJson
          .map<EventModel>(
              (jsonEventModel) => EventModel.fromJson(jsonEventModel))
          .toList();

      return eventModels;
    } else {
      throw ServerException();
    }
  }

  @override
  Future<Unit> addEvent(EventModel eventModel) async {
    final body = {
      "Name": eventModel.name,
      "Description": eventModel.description,
    };

    final response =
        await client.post(Uri.parse(BASE_URL + "/events/"), body: body);

    if (response.statusCode == 201) {
      return Future.value(unit);
    } else {
      throw ServerException();
    }
  }

  @override
  Future<Unit> deleteEvent(int eventId) async {
    final response = await client.delete(
      Uri.parse(BASE_URL + "/events/${eventId.toString()}"),
      headers: {"Content-Type": "application/json"},
    );

    if (response.statusCode == 200) {
      return Future.value(unit);
    } else {
      throw ServerException();
    }
  }

  @override
  Future<Unit> updateEvent(EventModel eventModel) async {
    final eventId = eventModel.id.toString();
    final body = {
      "Name": eventModel.name,
      "Description": eventModel.description,
    };

    final response = await client.patch(
      Uri.parse(BASE_URL + "/events/$eventId"),
      body: body,
    );

    if (response.statusCode == 200) {
      return Future.value(unit);
    } else {
      throw ServerException();
    }
  }
}
