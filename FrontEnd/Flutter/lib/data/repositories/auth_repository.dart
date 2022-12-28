import 'package:event_app/domain/entities/user.dart';
import 'package:event_app/domain/repositories/auth_repository.dart';

class AuthenticationRepositoryIml extends AuthenticationRepository {
  @override
  Future<User> signUp(String username) async {
    //Fake sign up action
    await Future.delayed(Duration(seconds: 1));
    return User(username: username);
  }
}
