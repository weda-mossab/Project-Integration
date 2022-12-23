part of 'add_delete_update_event_bloc.dart';

abstract class AddDeleteUpdateEvent extends Equatable {
  const AddDeleteUpdateEvent();

  @override
  List<Object> get props => [];
}

class AddEvent extends AddDeleteUpdateEvent {
  final Event event;

  AddEvent({required this.event});

  @override
  List<Object> get props => [event];
}

class UpdateEvent extends AddDeleteUpdateEvent {
  final Event event;

  UpdateEvent({required this.event});

  @override
  List<Object> get props => [event];
}

class DeleteEvent extends AddDeleteUpdateEvent {
  final int eventId;

  DeleteEvent({required this.eventId});

  @override
  List<Object> get props => [eventId];
}
