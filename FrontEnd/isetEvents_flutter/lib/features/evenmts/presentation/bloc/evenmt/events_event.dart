part of 'events_bloc.dart';

abstract class Events extends Equatable {
  const Events();

  @override
  List<Object> get props => [];
}

class GetAllEvents extends Events {}

class RefreshEvents extends Events {}
