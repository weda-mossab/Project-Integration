import '../entities/event.dart';
import 'package:dartz/dartz.dart';

import '../../../../core/error/failures.dart';

abstract class EventsRepository {
  Future<Either<Failure, List<Event>>> getAllEvents();
  Future<Either<Failure, Unit>> deleteEvent(int id);
  Future<Either<Failure, Unit>> updateEvent(Event event);
  Future<Either<Failure, Unit>> addEvent(Event event);
}
