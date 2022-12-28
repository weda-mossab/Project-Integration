import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';
import 'package:event_app/app/config/app_colors.dart';
import 'package:event_app/app/types/tab_type.dart';
import 'package:event_app/presentation/controllers/auth/auth_controller.dart';
import 'package:event_app/presentation/controllers/headline/headline_binding.dart';
import 'package:event_app/presentation/pages/headline/headline_page.dart';
import 'package:event_app/presentation/pages/profil/profile_page.dart';
import 'package:event_app/presentation/pages/contact/contact_page.dart';

class HomePage extends GetView<AuthController> {
  @override
  Widget build(BuildContext context) {
    return CupertinoTabScaffold(
      tabBar: CupertinoTabBar(
        items: TabType.values
            .map((e) => BottomNavigationBarItem(icon: e.icon, label: e.title))
            .toList(),
        inactiveColor: AppColors.lightGray,
        activeColor: AppColors.primary,
      ),
      tabBuilder: (context, index) {
        final type = TabType.values[index];
        switch (type) {
          case TabType.headline:
            HeadlineBinding().dependencies();
            return HeadlinePage();

          case TabType.contact:
            return ContactPage();

          case TabType.profile:
            return ProfilePage();
        }
      },
    );
  }
}
