package org.id.event_managment_service;


import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.id.event_managment_service.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping(value = "/api")

public class EventControler {
    @Autowired
    EventService eventService;


    
	private final StorageService storageService;

	@Autowired
	public EventControler(StorageService storageService) {
		this.storageService = storageService;
    }
    
    @GetMapping
    public List<Event> getEvents(){
    System.out.println(SecurityContextHolder.getContext().getAuthentication());
    return eventService.findAll();
    }

 
    @GetMapping(value="/{id}")
    public Event getEvents(@PathVariable String id){
    return eventService.findbyId(id);
    }

     
    @GetMapping(value="/users/{id}")
    public Collection<User> getStudents(@PathVariable String id){

    HashMap<String, User> map =eventService.findbyId(id).getParticipents();
    return  map.values().stream().collect(Collectors.toCollection(ArrayList::new));

    }


    @PostMapping(value="/save")
    public Event saveEvent(@RequestBody @Valid Event event, BindingResult result){
        eventService.save(event);
        return event; 
    }

	@PostMapping("/uplode/{id}")
	public void handleFileUpload(@RequestParam("file") MultipartFile file,@PathVariable String id) {
            Event e = eventService.findbyId(id);
            e.setAvatar("src/main/resources/public"+file.getOriginalFilename());
			storageService.store(file);
            eventService.save(e);
	}


    @DeleteMapping(value="/delete/{id}")
    public Event deleteEvent(@PathVariable String id){
        Event event = eventService.findbyId(id);
        eventService.delete(event);
        return event;
    }

    @PutMapping(value="/update/{id}")
    public Event updateEvent( @RequestBody Event eventDetails,@PathVariable String id ){
        Event event =eventService.findbyId(id);
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setAvatar(eventDetails.getAvatar());
        eventService.save(event);
        return event;
    }

}
