package org.id.event_managment_service;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
   private String name;
   private String email;
   private String preferred_username;
}
