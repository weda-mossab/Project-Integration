import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:event_app/app/config/app_text_styles.dart';
import 'package:jiffy/jiffy.dart';
import 'package:event_app/domain/entities/event.dart';

class EventCell extends StatelessWidget {
  final Event evenmt;
  EventCell({required this.evenmt});
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      height: 100,
      child: Row(
        children: [
          Container(
            margin: const EdgeInsets.only(right: 10),
            child: CachedNetworkImage(
              width: 120,
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
              imageUrl: evenmt.urlToImage ?? "",
            ),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  evenmt.title ?? "",
                  maxLines: 2,
                  style: AppTextStyles.title,
                ),
                Spacer(),
                Text(
                  evenmt.author ?? "",
                  maxLines: 1,
                  style: AppTextStyles.body,
                ),
                Text(
                  Jiffy(evenmt.publishedAt).yMMMMd,
                  maxLines: 1,
                  style: AppTextStyles.body,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
