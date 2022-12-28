// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility that Flutter provides. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter_test/flutter_test.dart';
import 'package:event_app/domain/usecases/fetch_headline_use_case.dart';
import 'package:event_app/domain/usecases/fetch_news_use_case.dart';
import 'package:event_app/domain/usecases/signup_use_case.dart';

import 'package:tuple/tuple.dart';

import 'repositories/mock_event_repository.dart';
import 'repositories/mock_auth_repository.dart';

void main() {
  test('Sign up test', () async {
    //Mock input
    final registerUserName = "test username";

    //Mock data
    final signUpUseCase = SignUpUseCase(MockAuthenticationRepository());
    final user = await signUpUseCase.execute(registerUserName);

    expect(user.username, registerUserName);
  });

  test('Fetch headline test', () async {
    final pageSize = 20;
    final currentPage = 1;

    //Mock data
    final fetchHeadlineUseCase = FetchHeadlineUseCase(MockEventRepository());
    final paging =
        await fetchHeadlineUseCase.execute(Tuple2(currentPage, pageSize));

    // Verify that data has created.
    expect(paging.events.length, 20);
  });

  test('Fetch news test', () async {
    //Mock input
    final keyword = "bitcoin";
    final pageSize = 20;
    final currentPage = 1;

    //Mock data
    final fetchHeadlineUseCase = FetchNewsUseCase(MockEventRepository());
    final paging = await fetchHeadlineUseCase
        .execute(Tuple3(keyword, currentPage, pageSize));

    // Verify that data has created.
    expect(paging.events.length, 3);
  });
}
