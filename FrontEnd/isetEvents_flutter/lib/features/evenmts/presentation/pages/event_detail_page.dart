import 'package:flutter/material.dart';

import '../../domain/entities/event.dart';
import '../widgets/event_detail_page/event_detail_widget.dart';

class EventDetailPage extends StatelessWidget {
  final Event event;
  const EventDetailPage({
    Key? key,
    required this.event,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppbar(),
      body: _buildBody(),
    );
  }

  AppBar _buildAppbar() {
    return AppBar(
      title: Text("Event Detail"),
    );
  }

  Widget _buildBody() {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(10),
        child: EventDetailWidget(event: event),
      ),
    );
  }
}
