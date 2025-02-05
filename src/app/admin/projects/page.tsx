'use client';
import { useState } from 'react';
import styles from './page.module.css';

type PropertyFormData = {
  projectUrl: string;
  projectDocuments: string;
};

export default function CreateProperty() {
  const [formData, setFormData] = useState<PropertyFormData>({
    projectUrl: '',
    projectDocuments: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://zaiko-server.vercel.app/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Property created successfully:', data);
      } else {
        console.error('Error creating property:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="projectUrl">Project URL</label>
          <input
            type="text"
            id="projectUrl"
            name="projectUrl"
            value={formData.projectUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="projectDocuments">Project Documents</label>
          <textarea
            id="projectDocuments"
            name="projectDocuments"
            value={formData.projectDocuments}
            onChange={handleChange}
            required
            rows={5}
            className={styles.textarea}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Project
        </button>
      </form>
    </div>
  );
}
