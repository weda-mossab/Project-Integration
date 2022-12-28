import 'package:event_app/app/core/usecases/pram_usecase.dart';
import 'package:event_app/domain/entities/user.dart';
import 'package:event_app/domain/repositories/auth_repository.dart';

class SignUpUseCase extends ParamUseCase<User, String> {
  final AuthenticationRepository _repo;
  SignUpUseCase(this._repo);

  @override
  Future<User> execute(String username) {
    return _repo.signUp(username);
  }
}
