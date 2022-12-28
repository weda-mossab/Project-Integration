import 'package:event_app/data/models/event_model.dart';
import 'package:event_app/domain/entities/paging.dart';

class PagingModel extends Paging {
  PagingModel({
    required this.totalResults,
    required this.events,
  }) : super(events: events, totalResults: totalResults);

  final int totalResults;
  final List<EventModel> events;

  @override
  factory PagingModel.fromJson(Map<String, dynamic> json) => PagingModel(
        totalResults: json["totalResults"],
        events: List.from(json["articles"].map((x) => EventModel.fromJson(x))),
      );
}
