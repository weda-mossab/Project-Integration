import '../../../../core/widgets/loading_widget.dart';
import 'events_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../core/util/snackbar_message.dart';
import '../../domain/entities/event.dart';
import '../bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import '../widgets/event_add_update_page/form_widget.dart';

class EventAddUpdatePage extends StatelessWidget {
  final Event? event;
  final bool isUpdateEvent;
  const EventAddUpdatePage({Key? key, this.event, required this.isUpdateEvent})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppbar(),
      body: _buildBody(),
    );
  }

  AppBar _buildAppbar() {
    return AppBar(title: Text(isUpdateEvent ? "Edit Event" : "Add Event"));
  }

  Widget _buildBody() {
    return Center(
      child: Padding(
          padding: EdgeInsets.all(10),
          child:
              BlocConsumer<AddDeleteUpdateEventBloc, AddDeleteUpdateEventState>(
            listener: (context, state) {
              if (state is MessageAddDeleteUpdateEventState) {
                SnackBarMessage().showSuccessSnackBar(
                    message: state.message, context: context);
                Navigator.of(context).pushAndRemoveUntil(
                    MaterialPageRoute(builder: (_) => EventsPage()),
                    (route) => false);
              } else if (state is ErrorAddDeleteUpdateEventState) {
                SnackBarMessage().showErrorSnackBar(
                    message: state.message, context: context);
              }
            },
            builder: (context, state) {
              if (state is LoadingAddDeleteUpdateEventState) {
                return LoadingWidget();
              }

              return FormWidget(
                  isUpdateEvent: isUpdateEvent,
                  event: isUpdateEvent ? event : null);
            },
          )),
    );
  }
}
