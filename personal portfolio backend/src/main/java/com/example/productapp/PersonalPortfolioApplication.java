package com.example.productapp;

import com.example.productapp.model.Admin;
import com.example.productapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersonalPortfolioApplication implements CommandLineRunner {

	@Autowired
	private AdminService adminService;

	public static void main(String[] args) {
		SpringApplication.run(PersonalPortfolioApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Initialize default admin on startup
		Admin defaultAdmin = adminService.createDefaultAdmin();
		System.out.println("Default admin initialized: " + defaultAdmin.getUsername());
	}
}
