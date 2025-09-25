package com.example.productapp.service;

import com.example.productapp.model.Contact;
import com.example.productapp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private JavaMailSender mailSender;

    public Contact saveContact(Contact contact) {
        Contact savedContact = contactRepository.save(contact);

        // Send email notification
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("ravikrishna99221@gmail.com"); // your Gmail
            message.setSubject("New Contact Form Submission: " + contact.getSubject());
            message.setText(
                "Name: " + contact.getName() + "\n" +
                "Email: " + contact.getEmail() + "\n" +
                "Subject: " + contact.getSubject() + "\n" +
                "Message: " + contact.getMessage()
            );
            mailSender.send(message);
            System.out.println("✅ Email sent!");
        } catch (Exception e) {
            System.err.println("❌ Failed to send email: " + e.getMessage());
        }

        return savedContact;
    }
}