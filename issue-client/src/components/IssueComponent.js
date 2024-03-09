import React, { useState } from 'react';
import axios from 'axios';

const IssueComponent = () => {

    const [issue, setIssue] = useState({
        id: 1,
        title: 'Sample Issue',
        description: 'This is a sample issue.',
    });

    const createIssue = async () => {
        try {
            const response = await axios.post('http://localhost:8080/issues', issue);
            console.log('Create Issue Response:', response.data);
        } catch (error) {
            console.error('Error creating issue:', error);
        }
    };

    const readIssue = async () => {
        try {
            const response = await axios.get('http://localhost:8080/issues');
            console.log('Read Issue Response:', response.data);
        } catch (error) {
            console.error('Error reading issue:', error);
        }
    };

    const updateIssue = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/issues/${issue.id}`, issue);
            console.log('Update Issue Response:', response.data);
        } catch (error) {
            console.error('Error updating issue:', error);
        }
    };

    const deleteIssue = async () => {

    };

    return (
        <div>
            <h2>Issue Component</h2>
            <button onClick={createIssue}>Create Issue</button>
            <button onClick={readIssue}>Read Issue</button>
            <button onClick={updateIssue}>Update Issue</button>
            <button onClick={deleteIssue}>Delete Issue</button>
        </div>
    )
}

export default IssueComponent;