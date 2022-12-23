import 'package:bloc/bloc.dart';
import '../../../../../core/error/failures.dart';
import '../../../../../core/strings/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';

import '../../../domain/entities/event.dart';
import '../../../domain/usecases/get_all_events.dart';

part 'events_event.dart';
part 'events_state.dart';

class EventsBloc extends Bloc<Events, EventsState> {
  final GetAllEventsUsecase getAllEvents;
  EventsBloc({
    required this.getAllEvents,
  }) : super(EventsInitial()) {
    on<Events>((event, emit) async {
      if (event is GetAllEvents) {
        emit(LoadingEventsState());

        final failureOrEvents = await getAllEvents();
        emit(_mapFailureOrEventsToState(failureOrEvents));
      } else if (event is RefreshEvents) {
        emit(LoadingEventsState());

        final failureOrEvents = await getAllEvents();
        emit(_mapFailureOrEventsToState(failureOrEvents));
      }
    });
  }

  EventsState _mapFailureOrEventsToState(Either<Failure, List<Event>> either) {
    return either.fold(
      (failure) => ErrorEventsState(message: _mapFailureToMessage(failure)),
      (events) => LoadedEventsState(
        events: events,
      ),
    );
  }

  String _mapFailureToMessage(Failure failure) {
    switch (failure.runtimeType) {
      case ServerFailure:
        return SERVER_FAILURE_MESSAGE;
      case EmptyCacheFailure:
        return EMPTY_CACHE_FAILURE_MESSAGE;
      case OfflineFailure:
        return OFFLINE_FAILURE_MESSAGE;
      default:
        return "Unexpected Error , Please try again later .";
    }
  }
}
