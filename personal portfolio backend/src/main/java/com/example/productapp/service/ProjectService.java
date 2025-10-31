package com.example.productapp.service;

import com.example.productapp.model.Project;
import com.example.productapp.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public List<Project> getActiveProjects() {
        return projectRepository.findByIsActiveTrue();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public Project updateProject(Long id, Project projectDetails) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            Project project = optionalProject.get();
            project.setName(projectDetails.getName());
            project.setDescription(projectDetails.getDescription());
            project.setImageUrl(projectDetails.getImageUrl());
            project.setTools(projectDetails.getTools());
            project.setWebsiteUrl(projectDetails.getWebsiteUrl());
            project.setActive(projectDetails.isActive());
            return projectRepository.save(project);
        }
        return null;
    }
}
