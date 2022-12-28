import 'package:event_app/domain/entities/paging.dart';

abstract class EventRepository {
  Future<Paging> fetchHeadline(int page, int pageSize);
  Future<Paging> fetchNewsByCategory(String keyword, int page, int pageSize);
}
