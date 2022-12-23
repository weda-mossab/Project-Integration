import '../../bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class DeleteDialogWidget extends StatelessWidget {
  final int eventId;
  const DeleteDialogWidget({
    Key? key,
    required this.eventId,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text("Are you Sure ?"),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(
            "No",
          ),
        ),
        TextButton(
          onPressed: () {
            BlocProvider.of<AddDeleteUpdateEventBloc>(context).add(
              DeleteEvent(eventId: eventId),
            );
          },
          child: Text("Yes"),
        ),
      ],
    );
  }
}
