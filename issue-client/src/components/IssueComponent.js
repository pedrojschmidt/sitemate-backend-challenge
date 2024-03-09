import React, { useState } from 'react';
import axios from 'axios';
import './IssueComponent.css';

const IssueComponent = () => {

    const [issue, setIssue] = useState({
        id: 1,
        title: '',
        description: '',
    });

    const [activeTab, setActiveTab] = useState('create');
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIssue((prevIssue) => ({ ...prevIssue, [name]: value }));
    };

    const handleResponse = (message) => {
        setResponseMessage(message);
        setTimeout(() => {
            setResponseMessage('');
        }, 2000);
    };

    const createIssue = async () => {
        try {
            const response = await axios.post('http://localhost:8080/issues', issue);
            handleResponse(`Create Issue Response: ${JSON.stringify(response.data)}`);
        } catch (error) {
            handleResponse(`Error creating issue: ${error.message}`);
        }
    };

    const readIssue = async () => {
        try {
            const response = await axios.get('http://localhost:8080/issues');
            handleResponse(`Read Issue Response: ${JSON.stringify(response.data)}`);
        } catch (error) {
            handleResponse(`Error reading issue: ${error.message}`);
        }
    };

    const updateIssue = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/issues/${issue.id}`, issue);
            handleResponse(`Update Issue Response: ${JSON.stringify(response.data)}`);
        } catch (error) {
            handleResponse(`Error updating issue: ${error.message}`);
        }
    };

    const deleteIssue = async () => {
        try {
            await axios.delete(`http://localhost:8080/issues/${issue.id}`);
            handleResponse(`Delete Issue Successful`);
        } catch (error) {
            handleResponse(`Error deleting issue: ${error.message}`);
        }
    };

    return (
        <div className="form-container">
            <div className="tabs-container">
                <button
                    className={`tab-button ${activeTab === 'create' && 'active'}`}
                    onClick={() => setActiveTab('create')}
                >
                    Create Issue
                </button>
                <button
                    className={`tab-button ${activeTab === 'update' && 'active'}`}
                    onClick={() => setActiveTab('update')}
                >
                    Update Issue
                </button>
                <button
                    className={`tab-button ${activeTab === 'read' && 'active'}`}
                    onClick={() => setActiveTab('read')}
                >
                    Read Issue
                </button>
                <button
                    className={`tab-button ${activeTab === 'delete' && 'active'}`}
                    onClick={() => setActiveTab('delete')}
                >
                    Delete Issue
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'create' && (
                    <form>
                        <label>
                            Title:
                            <input type="text" name="title" value={issue.title} onChange={handleInputChange}/>
                        </label>
                        <label>
                            Description:
                            <textarea name="description" value={issue.description} onChange={handleInputChange}/>
                        </label>
                        <button type="button" onClick={createIssue}>
                            Create Issue
                        </button>
                    </form>
                )}

                {activeTab === 'update' && (
                    <form>
                        <label>
                            Issue ID to Update:
                            <input type="number" name="id" value={issue.id} onChange={handleInputChange}/>
                        </label>
                        <label>
                            Updated Title:
                            <input type="text" name="title" value={issue.title} onChange={handleInputChange}/>
                        </label>
                        <label>
                            Updated Description:
                            <textarea name="description" value={issue.description} onChange={handleInputChange}/>
                        </label>
                        <button type="button" onClick={updateIssue}>
                            Update Issue
                        </button>
                    </form>
                )}

                {activeTab === 'read' && (
                    <button type="button" onClick={readIssue}>
                        Read Issue
                    </button>
                )}

                {activeTab === 'delete' && (
                    <form>
                        <label>
                            Issue ID to Delete:
                            <input type="number" name="id" value={issue.id} onChange={handleInputChange}/>
                        </label>
                        <button type="button" onClick={deleteIssue}>
                            Delete Issue
                        </button>
                    </form>
                )}
            </div>
            {responseMessage && (
                <div className="response-box">
                    <p>{responseMessage}</p>
                </div>
            )}
        </div>
    )
}

export default IssueComponent;