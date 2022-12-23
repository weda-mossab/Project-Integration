import '../repositories/events_repository.dart';
import 'package:dartz/dartz.dart';

import '../../../../core/error/failures.dart';

class DeleteEventUsecase {
  final EventsRepository repository;

  DeleteEventUsecase(this.repository);

  Future<Either<Failure, Unit>> call(int eventId) async {
    return await repository.deleteEvent(eventId);
  }
}
