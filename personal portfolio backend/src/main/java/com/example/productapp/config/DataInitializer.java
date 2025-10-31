package com.example.productapp.config;

import com.example.productapp.model.Project;
import com.example.productapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProjectService projectService;

    @Override
    public void run(String... args) throws Exception {
        // Check if projects already exist
        if (projectService.getAllProjects().isEmpty()) {
            initializeProjects();
        }
    }

    private void initializeProjects() {
        // Initialize with your existing static project data
        Project[] initialProjects = {
            createProject("Website Sekolah", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek1.webp", 
                Arrays.asList("HTML", "CSS", "Javascript", "AOS"), 
                "#"),
            
            createProject("Company Profile", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek2.webp", 
                Arrays.asList("HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"), 
                "#"),
            
            createProject("Web Pernikahan 2.0", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek3.webp", 
                Arrays.asList("Vite", "ReactJS", "TailwindCSS", "AOS"), 
                "#"),
            
            createProject("Website Course", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek4.webp", 
                Arrays.asList("Vite", "ReactJS", "Bootstrap", "AOS"), 
                "#"),
            
            createProject("Web Portfolio", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek5.webp", 
                Arrays.asList("HTML", "CSS", "Javascript", "Bootstrap"), 
                "#"),
            
            createProject("Company Profile 2.0", 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!", 
                "/assets/proyek/proyek6.webp", 
                Arrays.asList("NextJS", "TailwindCSS", "Framermotion"), 
                "#")
        };

        for (Project project : initialProjects) {
            projectService.saveProject(project);
        }
        
        System.out.println("Initial projects loaded successfully!");
    }

    private Project createProject(String name, String description, String imageUrl, 
                                java.util.List<String> tools, String websiteUrl) {
        Project project = new Project();
        project.setName(name);
        project.setDescription(description);
        project.setImageUrl(imageUrl);
        project.setTools(String.join(",", tools));
        project.setWebsiteUrl(websiteUrl);
        project.setActive(true);
        return project;
    }
}
