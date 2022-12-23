import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../../core/util/snackbar_message.dart';
import '../../../../../core/widgets/loading_widget.dart';
import '../../bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import '../../pages/events_page.dart';
import 'delete_dialog_widget.dart';

class DeleteEventBtnWidget extends StatelessWidget {
  final int eventId;
  const DeleteEventBtnWidget({
    Key? key,
    required this.eventId,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all(
          Colors.redAccent,
        ),
      ),
      onPressed: () => deleteDialog(context, eventId),
      icon: Icon(Icons.delete_outline),
      label: Text("Delete"),
    );
  }

  void deleteDialog(BuildContext context, int eventId) {
    showDialog(
        context: context,
        builder: (context) {
          return BlocConsumer<AddDeleteUpdateEventBloc,
              AddDeleteUpdateEventState>(
            listener: (context, state) {
              if (state is MessageAddDeleteUpdateEventState) {
                SnackBarMessage().showSuccessSnackBar(
                    message: state.message, context: context);

                Navigator.of(context).pushAndRemoveUntil(
                    MaterialPageRoute(
                      builder: (_) => EventsPage(),
                    ),
                    (route) => false);
              } else if (state is ErrorAddDeleteUpdateEventState) {
                Navigator.of(context).pop();
                SnackBarMessage().showErrorSnackBar(
                    message: state.message, context: context);
              }
            },
            builder: (context, state) {
              if (state is LoadingAddDeleteUpdateEventState) {
                return AlertDialog(
                  title: LoadingWidget(),
                );
              }
              return DeleteDialogWidget(eventId: eventId);
            },
          );
        });
  }
}
