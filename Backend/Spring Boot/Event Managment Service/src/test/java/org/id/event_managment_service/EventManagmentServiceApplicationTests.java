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
	Event v1 = new Event("Event1", null, null, null, null);
	eventRepository.save(v1);
	System.out.println(eventRepository.findAll());
	}
}
