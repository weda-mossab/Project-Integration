import '../repositories/events_repository.dart';
import 'package:dartz/dartz.dart';

import '../../../../core/error/failures.dart';
import '../entities/event.dart';

class GetAllEventsUsecase {
  final EventsRepository repository;

  GetAllEventsUsecase(this.repository);

  Future<Either<Failure, List<Event>>> call() async {
    return await repository.getAllEvents();
  }
}
