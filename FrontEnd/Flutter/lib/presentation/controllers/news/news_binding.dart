import 'package:get/get.dart';
import 'package:event_app/data/repositories/event_repository.dart';
import 'package:event_app/domain/usecases/fetch_news_use_case.dart';
import 'package:event_app/presentation/controllers/news/news_controller.dart';

class NewsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => FetchNewsUseCase(Get.find<ArticleRepositoryIml>()));
    Get.lazyPut(() => NewsController(Get.find()));
  }
}
