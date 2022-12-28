import 'package:event_app/data/models/paging_model.dart';
import 'package:event_app/data/providers/network/apis/event_api.dart';
import 'package:event_app/domain/repositories/event_repository.dart';

class EventRepositoryIml extends EventRepository {
  @override
  Future<PagingModel> fetchHeadline(int page, int pageSize) async {
    final response = await EventAPI.fetchHeadline(page, pageSize).request();
    return PagingModel.fromJson(response);
  }

  @override
  Future<PagingModel> fetchNewsByCategory(
      String keyword, int page, int pageSize) async {
    final response =
        await EventAPI.fetchNews(keyword, page, pageSize).request();
    return PagingModel.fromJson(response);
  }
}
