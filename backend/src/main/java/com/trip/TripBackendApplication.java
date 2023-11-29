package com.trip;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.trip"})
public class TripBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(TripBackendApplication.class, args);
	}
}