import 'package:event_app/app/core/usecases/pram_usecase.dart';
import 'package:event_app/domain/entities/paging.dart';
import 'package:event_app/domain/repositories/event_repository.dart';
import 'package:tuple/tuple.dart';

class FetchHeadlineUseCase extends ParamUseCase<Paging, Tuple2<int, int>> {
  final EventRepository _repo;
  FetchHeadlineUseCase(this._repo);

  @override
  Future<Paging> execute(Tuple2 param) {
    return _repo.fetchHeadline(param.item1, param.item2);
  }
}
