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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIssue((prevIssue) => ({ ...prevIssue, [name]: value }));
    };

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
        try {
            const response = await axios.delete(`http://localhost:8080/issues/${issue.id}`);
            console.log('Delete Issue Response:', response.data);
        } catch (error) {
            console.error('Error deleting issue:', error);
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
        </div>
    )
}

export default IssueComponent;