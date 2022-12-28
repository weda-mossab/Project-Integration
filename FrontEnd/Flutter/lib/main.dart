import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:event_app/app/services/local_storage.dart';
import 'package:event_app/app/util/dependency.dart';
import 'package:event_app/presentation/app.dart';

void main() async {
  DependencyCreator.init();
  WidgetsFlutterBinding.ensureInitialized();
  await initServices();
  runApp(App());
}

initServices() async {
  print('starting services ...');
  await Get.putAsync(() => LocalStorageService().init());
  print('All services started...');
}
