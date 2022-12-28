import 'package:event_app/data/providers/network/api_endpoint.dart';
import 'package:event_app/data/providers/network/api_provider.dart';
import 'package:event_app/data/providers/network/api_request_representable.dart';

enum EventType { fetchHeadline, fetchNews }

class EventAPI implements APIRequestRepresentable {
  final EventType type;
  String? keyword;
  int? page;
  int? pageSize;

  EventAPI._({required this.type, this.keyword, this.page, this.pageSize});

  EventAPI.fetchHeadline(int page, int pageSize)
      : this._(type: EventType.fetchHeadline, page: page, pageSize: pageSize);
  EventAPI.fetchNews(String keyword, int page, int pageSize)
      : this._(
            type: EventType.fetchNews,
            keyword: keyword,
            page: page,
            pageSize: pageSize);

  @override
  String get endpoint => APIEndpoint.eventapi;

  String get path {
    switch (type) {
      case EventType.fetchHeadline:
        return "/top-headlines";
      case EventType.fetchNews:
        return "/top-headlines";
    }
  }

  @override
  HTTPMethod get method {
    return HTTPMethod.get;
  }

  Map<String, String> get headers =>
      {"X-Api-Key": "d809d6a547734a67af23365ce5bc8c02"};

  Map<String, String> get query {
    switch (type) {
      case EventType.fetchHeadline:
        return {"country": "us", "page": "$page", "pageSize": "$pageSize"};
      case EventType.fetchNews:
        return {"page": "$page", "pageSize": "$pageSize", "q": keyword ?? ""};
    }
  }

  @override
  get body => null;

  Future request() {
    return APIProvider.instance.request(this);
  }

  @override
  String get url => endpoint + path;
}
