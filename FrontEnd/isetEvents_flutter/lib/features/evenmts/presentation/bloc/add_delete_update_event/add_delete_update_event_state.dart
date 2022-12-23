part of 'add_delete_update_event_bloc.dart';

abstract class AddDeleteUpdateEventState extends Equatable {
  const AddDeleteUpdateEventState();

  @override
  List<Object> get props => [];
}

class AddDeleteUpdateEventInitial extends AddDeleteUpdateEventState {}

class LoadingAddDeleteUpdateEventState extends AddDeleteUpdateEventState {}

class ErrorAddDeleteUpdateEventState extends AddDeleteUpdateEventState {
  final String message;

  ErrorAddDeleteUpdateEventState({required this.message});

  @override
  List<Object> get props => [message];
}

class MessageAddDeleteUpdateEventState extends AddDeleteUpdateEventState {
  final String message;

  MessageAddDeleteUpdateEventState({required this.message});

  @override
  List<Object> get props => [message];
}
