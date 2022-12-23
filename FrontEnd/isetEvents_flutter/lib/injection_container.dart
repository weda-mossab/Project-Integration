import 'core/network/network_info.dart';
import 'features/evenmts/data/datasources/event_local_data_source.dart';
import 'features/evenmts/data/datasources/event_remote_data_source.dart';
import 'features/evenmts/data/repositories/event_repository_impl.dart';
import 'features/evenmts/domain/repositories/events_repository.dart';
import 'features/evenmts/domain/usecases/add_event.dart';
import 'features/evenmts/domain/usecases/delete_event.dart';
import 'features/evenmts/domain/usecases/get_all_events.dart';
import 'features/evenmts/domain/usecases/update_event.dart';
import 'features/evenmts/presentation/bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import 'features/evenmts/presentation/bloc/evenmt/events_bloc.dart';
import 'package:get_it/get_it.dart';
import 'package:http/http.dart' as http;
import 'package:internet_connection_checker/internet_connection_checker.dart';
import 'package:shared_preferences/shared_preferences.dart';

final sl = GetIt.instance;

Future<void> init() async {
//! Features - events

// Bloc

  sl.registerFactory(() => EventsBloc(getAllEvents: sl()));
  sl.registerFactory(() => AddDeleteUpdateEventBloc(
      addEvent: sl(), updateEvent: sl(), deleteEvent: sl()));

// Usecases

  sl.registerLazySingleton(() => GetAllEventsUsecase(sl()));
  sl.registerLazySingleton(() => AddEventUsecase(sl()));
  sl.registerLazySingleton(() => DeleteEventUsecase(sl()));
  sl.registerLazySingleton(() => UpdateEventUsecase(sl()));

// Repository

  sl.registerLazySingleton<EventsRepository>(() => EventsRepositoryImpl(
      remoteDataSource: sl(), localDataSource: sl(), networkInfo: sl()));

// Datasources

  sl.registerLazySingleton<EventRemoteDataSource>(
      () => EventRemoteDataSourceImpl(client: sl()));
  sl.registerLazySingleton<EventLocalDataSource>(
      () => EventLocalDataSourceImpl(sharedPreferences: sl()));

//! Core

  sl.registerLazySingleton<NetworkInfo>(() => NetworkInfoImpl(sl()));

//! External

  final sharedPreferences = await SharedPreferences.getInstance();
  sl.registerLazySingleton(() => sharedPreferences);
  sl.registerLazySingleton(() => http.Client());
  sl.registerLazySingleton(() => InternetConnectionChecker());
}
