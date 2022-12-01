package org.id.event_managment_service;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface EventRepository extends MongoRepository<Event,String>{

}
