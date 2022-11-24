package org.id.event_managment_service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class EventService {
    @Autowired
    EventRepository eventRepository;

    public List<Event> findAll(){
        return eventRepository.findAll();
    }

    public Event findbyId(String id){
        Optional<Event> e =eventRepository.findById(id);
        return e.get(); 
    }

    public void save(Event event) {
        eventRepository.save(event);
    }

    public void delete(Event event) {
        eventRepository.delete(event);
    }
   
    }
