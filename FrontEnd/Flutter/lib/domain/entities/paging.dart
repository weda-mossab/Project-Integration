import 'package:event_app/domain/entities/event.dart';

class Paging {
  Paging({
    required this.totalResults,
    required this.events,
  });

  int totalResults;
  List<Event> events;
}
