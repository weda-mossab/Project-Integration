import 'package:get/get.dart';
import 'package:event_app/data/repositories/auth_repository.dart';
import 'package:event_app/domain/usecases/signup_use_case.dart';
import 'package:event_app/presentation/controllers/control/auth_controller.dart';

class AuthBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => SignUpUseCase(Get.find<AuthenticationRepositoryIml>()));
    Get.put(AuthController(Get.find()), permanent: true);
  }
}
