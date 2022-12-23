import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'core/app_theme.dart';
import 'features/evenmts/presentation/bloc/add_delete_update_event/add_delete_update_event_bloc.dart';
import 'features/evenmts/presentation/bloc/evenmt/events_bloc.dart';
import 'features/evenmts/presentation/pages/events_page.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await di.init();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
        providers: [
          BlocProvider(create: (_) => di.sl<EventsBloc>()..add(GetAllEvents())),
          BlocProvider(create: (_) => di.sl<AddDeleteUpdateEventBloc>()),
        ],
        child: MaterialApp(
            debugShowCheckedModeBanner: false,
            theme: appTheme,
            title: 'Iset Events',
            home: EventsPage()));
  }
}
