import 'update_event_btn_widget.dart';
import 'package:flutter/material.dart';

import '../../../domain/entities/event.dart';
import 'delete_event_btn_widget.dart';

class EventDetailWidget extends StatelessWidget {
  final Event event;
  const EventDetailWidget({
    Key? key,
    required this.event,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8),
      child: Column(
        children: [
          Text(
            event.name,
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          Divider(
            height: 50,
          ),
          Text(
            event.description,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
          Divider(
            height: 50,
          ),
          Text(
            event.avatar,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
          Divider(
            height: 50,
          ),
          
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              UpdateEventBtnWidget(event: event),
              DeleteEventBtnWidget(eventId: event.id!)
            ],
          )
        ],
      ),
    );
  }
}
