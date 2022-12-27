package org.id.event_managment_service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EventManagmentServiceApplicationTests {
	@Autowired
	EventRepository eventRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void storageTest(){
	Event v1 = new Event("Event1", "Event", null, null, "Event");
	v1.getParticipents().put("Ahmed",new User("Ahmed","Ahmed","Ahmed"));
	v1.getParticipents().put("Mossab",new User("Mossab","Mossab","Mossab"));
	v1.getParticipents().put("MyDeath",new User("MyDeath","MyDeath","MyDeath"));

	eventRepository.save(v1);
	System.out.println(eventRepository.findAll());
	}
}
