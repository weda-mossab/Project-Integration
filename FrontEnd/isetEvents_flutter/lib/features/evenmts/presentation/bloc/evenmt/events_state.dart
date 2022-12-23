part of 'events_bloc.dart';

abstract class EventsState extends Equatable {
  const EventsState();

  @override
  List<Object> get props => [];
}

class EventsInitial extends EventsState {}

class LoadingEventsState extends EventsState {}

class LoadedEventsState extends EventsState {
  final List<Event> events;

  LoadedEventsState({required this.events});

  @override
  List<Object> get props => [events];
}

class ErrorEventsState extends EventsState {
  final String message;

  ErrorEventsState({required this.message});

  @override
  List<Object> get props => [message];
}
