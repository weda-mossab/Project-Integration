import 'package:event_app/domain/entities/user.dart';

abstract class AuthenticationRepository {
  Future<User> signUp(String username);
}
