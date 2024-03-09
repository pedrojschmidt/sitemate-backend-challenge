package com.sitemate.issueapi.issue;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues")
public class IssueController {

    @PostMapping
    public ResponseEntity<Issue> createIssue(@RequestBody Issue issue) {
        System.out.println("Creating Issue: " + issue);
        return new ResponseEntity<>(issue, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Issue> readIssue() {
        Issue sampleIssue = new Issue();
        sampleIssue.setId(1L);
        sampleIssue.setTitle("Sample Issue");
        sampleIssue.setDescription("This is a sample issue.");
        return new ResponseEntity<>(sampleIssue, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Issue> updateIssue(@PathVariable Long id, @RequestBody Issue updatedIssue) {
        System.out.println("Updating Issue with ID " + id + ": " + updatedIssue);
        return new ResponseEntity<>(updatedIssue, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteIssue(@PathVariable Long id) {
        return null;
    }

}
