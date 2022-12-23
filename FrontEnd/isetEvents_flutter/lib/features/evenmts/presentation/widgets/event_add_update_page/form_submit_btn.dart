import 'package:flutter/material.dart';

class FormSubmitBtn extends StatelessWidget {
  final void Function() onPressed;
  final bool isUpdateEvent;

  const FormSubmitBtn({
    Key? key,
    required this.onPressed,
    required this.isUpdateEvent,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
        onPressed: onPressed,
        icon: isUpdateEvent ? Icon(Icons.edit) : Icon(Icons.add),
        label: Text(isUpdateEvent ? "Update" : "Add"));
  }
}
