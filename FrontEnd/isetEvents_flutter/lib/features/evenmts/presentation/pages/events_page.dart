import 'event_add_update_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../core/widgets/loading_widget.dart';
import '../bloc/evenmt/events_bloc.dart';
import '../widgets/events_page/message_display_widget.dart';
import '../widgets/events_page/event_list_widget.dart';

class EventsPage extends StatelessWidget {
  const EventsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppbar(),
      body: _buildBody(),
      floatingActionButton: _buildFloatingBtn(context),
    );
  }

  AppBar _buildAppbar() => AppBar(title: Text('Events'));

  Widget _buildBody() {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: BlocBuilder<EventsBloc, EventsState>(
        builder: (context, state) {
          if (state is LoadingEventsState) {
            return LoadingWidget();
          } else if (state is LoadedEventsState) {
            return RefreshIndicator(
                onRefresh: () => _onRefresh(context),
                child: EventListWidget(events: state.events));
          } else if (state is ErrorEventsState) {
            return MessageDisplayWidget(message: state.message);
          }
          return LoadingWidget();
        },
      ),
    );
  }

  Future<void> _onRefresh(BuildContext context) async {
    BlocProvider.of<EventsBloc>(context).add(RefreshEvents());
  }

  Widget _buildFloatingBtn(BuildContext context) {
    return FloatingActionButton(
      onPressed: () {
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (_) => EventAddUpdatePage(
                      isUpdateEvent: false,
                    )));
      },
      child: Icon(Icons.add),
    );
  }
}
