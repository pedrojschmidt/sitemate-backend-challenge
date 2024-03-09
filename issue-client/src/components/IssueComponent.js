import React, { useState } from 'react';
import axios from 'axios';

const IssueComponent = () => {

    const [issue, setIssue] = useState({
        id: 1,
        title: 'Sample Issue',
        description: 'This is a sample issue.',
    });

    const createIssue = async () => {

    };

    const readIssue = async () => {

    };

    const updateIssue = async () => {

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