package com.sitemate.issueapi.issue;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issues")
public class IssueController {

    @PostMapping
    public ResponseEntity<Issue> createIssue(@RequestBody Issue issue) {
        return null;
    }

    @GetMapping
    public ResponseEntity<Issue> readIssue() {
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Issue> updateIssue(@PathVariable Long id, @RequestBody Issue updatedIssue) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteIssue(@PathVariable Long id) {
        return null;
    }

}
