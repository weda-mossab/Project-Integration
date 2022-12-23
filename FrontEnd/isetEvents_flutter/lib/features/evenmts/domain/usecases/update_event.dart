import 'package:dartz/dartz.dart';

import '../../../../core/error/failures.dart';
import '../entities/event.dart';
import '../repositories/events_repository.dart';

class UpdateEventUsecase {
  final EventsRepository repository;

  UpdateEventUsecase(this.repository);

  Future<Either<Failure, Unit>> call(Event event) async {
    return await repository.updateEvent(event);
  }
}
