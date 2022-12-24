import '../../bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../domain/entities/event.dart';
import 'form_submit_btn.dart';
import 'text_form_field_widget.dart';
import 'package:image_picker/image_picker.dart';

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
  TextEditingController _name = TextEditingController();
  TextEditingController _description = TextEditingController();
  ImagePicker _avatar = ImagePicker();
  late DateTime _date;

  @override
  void initState() {
    if (widget.isUpdateEvent) {
      _name.text = widget.event!.name;
      _description.text = widget.event!.description;
      _avatar.pickImage(source: ImageSource.gallery);
      _date = widget.event!.date;
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
                name: "Name", multiLines: false, controller: _name),
            TextFormFieldWidget(
                name: "Description",
                multiLines: true,
                controller: _description),
            MaterialButton(
                color: Colors.blue,
                child: const Text("Pick Image",
                    style: TextStyle(
                        color: Colors.white70, fontWeight: FontWeight.bold)),
                onPressed: () {}),
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
          name: _name.text,
          description: _description.text,
          // avatar: _avatar.pickImage(source: galler),
          date: _date);

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
