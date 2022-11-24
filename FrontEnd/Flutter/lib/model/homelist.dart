import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class HomeList {
  HomeList({
    this.navigateScreen,
    this.imagePath = '',
  });

  Widget? navigateScreen;
  String imagePath;

  static List<HomeList> homeList = [
    HomeList(
      imagePath: 'assets/images/event1.jpg',
      //navigateScreen: IntroductionAnimationScreen(),
    ),
    HomeList(
      imagePath: 'assets/images/event2.png',
      // navigateScreen: HotelHomeScreen(),
    ),
    HomeList(
      imagePath: 'assets/images/event3.jpg',
      // navigateScreen: FitnessAppHomeScreen(),
    ),
    HomeList(
      imagePath: 'assets/images/event4.jpeg',
      // navigateScreen: DesignCourseHomeScreen(),
    ),
  ];
}
