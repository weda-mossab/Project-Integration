package org.id.event_managment_service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventControler {
    @Autowired
    EventService eventService;
    
    @GetMapping
    public List<Event> getEvents(){
    return eventService.findAll();
    }

    @GetMapping(value="/{id}")
    public Event getEvents(@PathVariable String id){
    return eventService.findbyId(id);
    }

    @PostMapping
    public Event saveEvent(@RequestBody Event event){
        eventService.save(event);
        return event;
    }

    @DeleteMapping
    public Event deleteEvent(@PathVariable String id){
        Event event = eventService.findbyId(id);
        eventService.delete(event);
        return event;
    }

    @PostMapping
    public Event updaEvent(@PathVariable String id , @RequestBody Event eventDetails){
        Event event =eventService.findbyId(id);
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setAvatar(eventDetails.getAvatar());
        eventService.save(event);
        return event;
    }


}