import 'dart:ffi';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:event_app/app/config/app_text_styles.dart';
import 'package:event_app/domain/entities/event.dart';

class DetailPage extends StatelessWidget {
  final Event article;

  DetailPage({required this.article});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: CupertinoNavigationBar(
        middle: Text('Event Detail'),
      ),
      child: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 5),
          child: Column(
            children: [
              Text(
                article.title ?? "",
                style: AppTextStyles.title,
                maxLines: null,
              ),
              SizedBox(
                height: 10,
              ),
              AspectRatio(
                aspectRatio: 16 / 9,
                child: CachedNetworkImage(
                  memCacheHeight: 150,
                  memCacheWidth: 150,
                  imageBuilder: (context, imageProvider) => Container(
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: imageProvider,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  placeholder: (context, url) => CupertinoActivityIndicator(),
                  errorWidget: (context, url, error) => Container(
                    color: Colors.grey,
                  ),
                  imageUrl: article.urlToImage ?? "",
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                article.content ?? "",
                style: AppTextStyles.body,
              ),
              Text(""),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.all(6.0),
                    foregroundColor: Color.fromARGB(255, 255, 255, 255),
                    backgroundColor: Color.fromARGB(255, 15, 109, 185),
                    textStyle: const TextStyle(fontSize: 15)),
                // onClick: () => context.openUrl(),
                onPressed: () {},
                child: Text('Participate'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
