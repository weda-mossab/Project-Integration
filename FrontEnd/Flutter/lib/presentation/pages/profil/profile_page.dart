import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:event_app/presentation/pages/detail/detail_page.dart';
import 'package:event_app/presentation/pages/headline/views/event_cell.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Card(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15.0),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                height: MediaQuery.of(context).size.height * .5,
                child: Stack(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 40.0),
                      child: Container(
                        height: MediaQuery.of(context).size.height,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.only(
                            bottomLeft: Radius.elliptical(
                                MediaQuery.of(context).size.width * 0.5, 100.0),
                            bottomRight: Radius.elliptical(
                                MediaQuery.of(context).size.width * 0.5, 100.0),
                          ),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.topCenter,
                      child: Stack(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(left: 10, top: 100),
                            child: Align(
                              alignment: Alignment.topCenter,
                              child: TextButton(
                                onPressed: () {
                                  //send you to login page
                                },
                                child: Text(
                                  'Press To Logout',
                                  style: TextStyle(
                                    color: Color.fromARGB(255, 15, 109, 185),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsets.only(left: 10, right: 10, top: 170),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          CircleAvatar(
                            radius: 30,
                            backgroundColor: Color.fromARGB(255, 15, 109, 185),
                            child: Icon(
                              Icons.chat,
                              size: 30,
                              color: Color.fromARGB(255, 210, 229, 253),
                            ),
                          ),
                          CircleAvatar(
                            radius: 70,
                            backgroundImage: NetworkImage(
                                'https://i.pinimg.com/originals/df/cd/79/dfcd797320e5340e606365f4047d1e79.jpg'),
                          ),
                          CircleAvatar(
                            radius: 30,
                            backgroundColor: Color.fromARGB(255, 15, 109, 185),
                            child: Icon(
                              Icons.call,
                              size: 30,
                              color: Color.fromARGB(255, 210, 229, 253),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                    left: 121, right: 10, top: 1, bottom: 40),
                child: Text('User Name', style: TextStyle(fontSize: 20)),
              ),
              Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 150.0),
                      child: Column(
                        children: [
                          Text('Gender',
                              style: TextStyle(
                                color: Color.fromARGB(255, 15, 109, 185),
                              )),
                          SizedBox(
                            height: 15,
                          ),
                          Text(
                            'Female',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 150.0),
                      child: Column(
                        children: [
                          Text('Phone number',
                              style: TextStyle(
                                color: Color.fromARGB(255, 15, 109, 185),
                              )),
                          SizedBox(
                            height: 15,
                          ),
                          Text(
                            '52-698-741',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 150.0),
                      child: Column(
                        children: [
                          Text('Birth date',
                              style: TextStyle(
                                color: Color.fromARGB(255, 15, 109, 185),
                              )),
                          SizedBox(
                            height: 15,
                          ),
                          Text(
                            '12/06/2000',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
