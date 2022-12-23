import '../../bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../domain/entities/event.dart';
import 'form_submit_btn.dart';
import 'text_form_field_widget.dart';

class FormWidget extends StatefulWidget {
  final bool isUpdateEvent;
  final Event? event;
  const FormWidget({
    Key? key,
    required this.isUpdateEvent,
    this.event,
  }) : super(key: key);

  @override
  State<FormWidget> createState() => _FormWidgetState();
}

class _FormWidgetState extends State<FormWidget> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController _titleController = TextEditingController();
  TextEditingController _bodyController = TextEditingController();

  @override
  void initState() {
    if (widget.isUpdateEvent) {
      _titleController.text = widget.event!.title;
      _bodyController.text = widget.event!.body;
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextFormFieldWidget(
                name: "Name", multiLines: false, controller: _titleController),
            TextFormFieldWidget(
                name: "Description",
                multiLines: true,
                controller: _bodyController),
            FormSubmitBtn(
                isUpdateEvent: widget.isUpdateEvent,
                onPressed: validateFormThenUpdateOrAddEvent),
          ]),
    );
  }

  void validateFormThenUpdateOrAddEvent() {
    final isValid = _formKey.currentState!.validate();

    if (isValid) {
      final event = Event(
          id: widget.isUpdateEvent ? widget.event!.id : null,
          title: _titleController.text,
          body: _bodyController.text);

      if (widget.isUpdateEvent) {
        BlocProvider.of<AddDeleteUpdateEventBloc>(context)
            .add(UpdateEvent(event: event));
      } else {
        BlocProvider.of<AddDeleteUpdateEventBloc>(context)
            .add(AddEvent(event: event));
      }
    }
  }
}
