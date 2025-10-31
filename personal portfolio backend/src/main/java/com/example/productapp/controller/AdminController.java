package com.example.productapp.controller;

import com.example.productapp.model.Admin;
import com.example.productapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        Map<String, Object> response = new HashMap<>();
        
        if (adminService.authenticate(username, password)) {
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("username", username);
        } else {
            response.put("success", false);
            response.put("message", "Invalid credentials");
        }
        
        return response;
    }

    @PostMapping("/init")
    public Admin initializeDefaultAdmin() {
        return adminService.createDefaultAdmin();
    }
}
