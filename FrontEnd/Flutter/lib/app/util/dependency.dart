import 'package:get/get.dart';
import 'package:event_app/data/repositories/event_repository.dart';

class DependencyCreator {
  static init() {
    Get.lazyPut(() => EventRepositoryIml());
  }
}
