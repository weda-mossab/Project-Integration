import 'package:flutter/cupertino.dart';

enum TabType { headline, contact, profile }

extension TabItem on TabType {
  Icon get icon {
    switch (this) {
      case TabType.headline:
        return Icon(CupertinoIcons.list_bullet, size: 25);

      case TabType.contact:
        return Icon(CupertinoIcons.conversation_bubble, size: 25);
      case TabType.profile:
        return Icon(CupertinoIcons.person, size: 25);
    }
  }

  String get title {
    switch (this) {
      case TabType.headline:
        return "Events list";

      case TabType.contact:
        return "Contact Us";

      case TabType.profile:
        return "Profile";
    }
  }
}
