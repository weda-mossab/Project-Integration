import 'package:get/get.dart';
import 'package:event_app/domain/usecases/fetch_headline_use_case.dart';
import 'package:event_app/data/repositories/event_repository.dart';
import 'package:event_app/presentation/controllers/headline/headline_controller.dart';

class HeadlineBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => FetchHeadlineUseCase(Get.find<ArticleRepositoryIml>()));
    Get.lazyPut(() => HeadlineController(Get.find()));
  }
}
