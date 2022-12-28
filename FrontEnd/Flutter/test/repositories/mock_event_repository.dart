import 'dart:io';
import 'package:event_app/data/models/paging_model.dart';
import 'package:event_app/domain/repositories/event_repository.dart';
import 'dart:convert';

class MockEventRepository extends EventRepository {
  @override
  Future<PagingModel> fetchHeadline(int page, int pageSize) async {
    final file = File('test/data/headline_sample.json');
    final response = await file.readAsString();
    final data = await json.decode(response);
    return PagingModel.fromJson(data);
  }

  @override
  Future<PagingModel> fetchNewsByCategory(
      String keyword, int page, int pageSize) async {
    final file = File('test/data/news_sample.json');
    final response = await file.readAsString();
    final data = await json.decode(response);
    return PagingModel.fromJson(data);
  }
}
