import 'package:dartz/dartz.dart';

import '../../../../core/error/failures.dart';
import '../entities/event.dart';
import '../repositories/events_repository.dart';

class AddEventUsecase {
  final EventsRepository repository;

  AddEventUsecase(this.repository);

  Future<Either<Failure, Unit>> call(Event event) async {
    return await repository.addEvent(event);
  }
}
