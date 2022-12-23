import 'package:flutter/material.dart';

import '../../../domain/entities/event.dart';

import '../../pages/event_add_update_page.dart';

class UpdateEventBtnWidget extends StatelessWidget {
  final Event event;
  const UpdateEventBtnWidget({
    Key? key,
    required this.event,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => EventAddUpdatePage(
                isUpdateEvent: true,
                event: event,
              ),
            ));
      },
      icon: Icon(Icons.edit),
      label: Text("Edit"),
    );
  }
}
