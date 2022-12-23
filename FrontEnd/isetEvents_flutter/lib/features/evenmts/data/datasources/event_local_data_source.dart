import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../../core/error/exceptions.dart';
import '../models/event_model.dart';

abstract class EventLocalDataSource {
  Future<List<EventModel>> getCachedEvents();
  Future<Unit> cacheEvents(List<EventModel> eventModels);
}

const CACHED_EVENTS = "CACHED_EVENTS";

class EventLocalDataSourceImpl implements EventLocalDataSource {
  final SharedPreferences sharedPreferences;

  EventLocalDataSourceImpl({required this.sharedPreferences});
  @override
  Future<Unit> cacheEvents(List<EventModel> eventModels) {
    List eventModelsToJson = eventModels
        .map<Map<String, dynamic>>((eventModel) => eventModel.toJson())
        .toList();
    sharedPreferences.setString(CACHED_EVENTS, json.encode(eventModelsToJson));
    return Future.value(unit);
  }

  @override
  Future<List<EventModel>> getCachedEvents() {
    final jsonString = sharedPreferences.getString(CACHED_EVENTS);
    if (jsonString != null) {
      List decodeJsonData = json.decode(jsonString);
      List<EventModel> jsonToEventModels = decodeJsonData
          .map<EventModel>(
              (jsonEventModel) => EventModel.fromJson(jsonEventModel))
          .toList();
      return Future.value(jsonToEventModels);
    } else {
      throw EmptyCacheException();
    }
  }
}
