package org.id.event_managment_service;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("event")

public class Event {
    
@Id
private String id;
private String name;
private Date date;
private String avatar;
private String description;

public Event(String id,String name,Date date, String avatar, String description){
    super();
    this.id=id;
    this.name=name;
    this.description=description;
    this.date=date;
    this.avatar=avatar;
}

}