package com.example.productapp.controller;

import com.example.productapp.model.Project;
import com.example.productapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects() {
        System.out.println("GET /api/projects called");
        return projectService.getAllProjects();
    }

    @GetMapping("/active")
    public List<Project> getActiveProjects() {
        System.out.println("GET /api/projects/active called");
        return projectService.getActiveProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id).orElse(null);
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project project) {
        return projectService.updateProject(id, project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}
