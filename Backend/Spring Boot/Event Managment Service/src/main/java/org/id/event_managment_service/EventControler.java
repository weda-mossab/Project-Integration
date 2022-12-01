package org.id.event_managment_service;

import java.util.List;

import javax.naming.Binding;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api")

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

    @PostMapping(value="/save")
    public Event saveEvent(@RequestBody @Valid Event event, BindingResult result){
        System.out.println(result);
        eventService.save(event);
        return event;
        
    }

    @DeleteMapping(value="/delete")
    public Event deleteEvent(@RequestBody Event eventDetails){
        Event event = eventService.findbyId(eventDetails.getId());
        eventService.delete(event);
        return event;
    }

    @PutMapping(value="/update")
    public Event updateEvent( @RequestBody Event eventDetails){
        Event event =eventService.findbyId(eventDetails.getId());
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setAvatar(eventDetails.getAvatar());
        eventService.save(event);
        return event;
    }

}
