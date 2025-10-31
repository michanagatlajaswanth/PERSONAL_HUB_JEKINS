package com.example.productapp.service;

import com.example.productapp.model.Admin;
import com.example.productapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(String username, String password) {
        Optional<Admin> admin = adminRepository.findByUsername(username);
        return admin.isPresent() && admin.get().getPassword().equals(password);
    }

    public Admin createDefaultAdmin() {
        // Check if admin already exists
        Optional<Admin> existingAdmin = adminRepository.findByUsername("admin");
        if (existingAdmin.isPresent()) {
            return existingAdmin.get();
        }

        // Create default admin
        Admin admin = new Admin();
        admin.setUsername("admin");
        admin.setPassword("admin123"); // In production, this should be hashed
        admin.setEmail("admin@portfolio.com");
        
        return adminRepository.save(admin);
    }
}
