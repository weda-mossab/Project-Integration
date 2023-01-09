import 'package:event_app/features/auth/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:event_app/app/services/local_storage.dart';
import 'package:event_app/app/util/dependency.dart';
import 'package:event_app/presentation/app.dart';
// import 'package:firebase_auth_project/widget_tree.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  // DependencyCreator.init();
  // WidgetsFlutterBinding.ensureInitialized();
  // await initServices();
  
  runApp(App());
}

initServices() async {
  print('starting services ...');
  await Get.putAsync(() => LocalStorageService().init());
  print('All services started...');
}


class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
  return GetMaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'Login',
    home:LoginScreen(),
  );
  
  }}

/*
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
  return GetMaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'Login',
    home:LoginScreen(),
  );
  
  }}*/

