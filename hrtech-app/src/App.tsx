import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [jobFormMessage, setJobFormMessage] = useState('');

  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [assessmentRole, setAssessmentRole] = useState('');
  const [assessmentDuration, setAssessmentDuration] = useState('');
  const [assessmentLevel, setAssessmentLevel] = useState('');
  const [assessmentFormMessage, setAssessmentFormMessage] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (email === 'recruiter@recruitiq.com' && password === 'Password@123') {
      setError('');
      setIsLoggedIn(true);
      setActivePage('dashboard');
      return;
    }

    setError('Invalid email or password');
  };

  const handleCreateJob = () => {
    if (!jobTitle || !department || !location || !employmentType) {
      setJobFormMessage('Please fill all job details');
      return;
    }

    setJobFormMessage('Job created successfully');

    setJobTitle('');
    setDepartment('');
    setLocation('');
    setEmploymentType('');
  };

  const handleCreateAssessment = () => {
    if (!assessmentTitle || !assessmentRole || !assessmentDuration || !assessmentLevel) {
      setAssessmentFormMessage('Please fill all assessment details');
      return;
    }

    setAssessmentFormMessage('Assessment created successfully');

    setAssessmentTitle('');
    setAssessmentRole('');
    setAssessmentDuration('');
    setAssessmentLevel('');
  };

  if (isLoggedIn) {
    return (
      <main className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="logo-row">
            <div className="logo-box">R</div>
            <div>
              <p className="brand-name">RecruitIQ</p>
              <p className="brand-subtext">Recruiter Workspace</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button
              type="button"
              className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActivePage('dashboard')}
            >
              Dashboard
            </button>

            <button
              type="button"
              className={`nav-item ${activePage === 'jobs' ? 'active' : ''}`}
              onClick={() => setActivePage('jobs')}
            >
              Jobs
            </button>

            <button
              type="button"
              className={`nav-item ${activePage === 'assessments' ? 'active' : ''}`}
              onClick={() => setActivePage('assessments')}
            >
              Assessments
            </button>

            <button type="button" className="nav-item">
              Candidates
            </button>

            <button type="button" className="nav-item">
              Reports
            </button>
          </nav>
        </aside>

        <section className="dashboard-content">
          {activePage === 'dashboard' && (
            <>
              <div className="dashboard-header">
                <div>
                  <p className="section-label">RecruitIQ Platform</p>
                  <h1>Recruiter Dashboard</h1>
                  <p className="section-subtitle">
                    Track hiring activity, candidate pipeline, and assessment performance in one place.
                  </p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-label">Open Roles</p>
                  <h2>12</h2>
                  <span>+3 this week</span>
                </div>

                <div className="stat-card">
                  <p className="stat-label">Candidates</p>
                  <h2>48</h2>
                  <span>8 shortlisted</span>
                </div>

                <div className="stat-card">
                  <p className="stat-label">Assessments</p>
                  <h2>06</h2>
                  <span>2 pending review</span>
                </div>
              </div>

              <div className="overview-panel">
                <div className="overview-card">
                  <p className="section-label">Hiring Overview</p>
                  <h3>Frontend Developer</h3>
                  <p>24 applicants • 6 shortlisted • 2 interviews scheduled</p>
                </div>

                <div className="overview-card">
                  <p className="section-label">Top Insight</p>
                  <h3>Assessment Completion Rate</h3>
                  <p>81% of invited candidates completed their evaluation this week.</p>
                </div>
              </div>
            </>
          )}

          {activePage === 'jobs' && (
            <>
              <div className="dashboard-header">
                <div>
                  <p className="section-label">Jobs Management</p>
                  <h1>Jobs</h1>
                  <p className="section-subtitle">
                    Create and manage open roles for your hiring pipeline.
                  </p>
                </div>
              </div>

              <div className="jobs-layout">
                <section className="job-form-card">
                  <p className="section-label">Create Job</p>
                  <h2>Add a new role</h2>

                  <form className="job-form">
                    <div className="form-group">
                      <label htmlFor="job-title">Job title</label>
                      <input
                        id="job-title"
                        type="text"
                        placeholder="Frontend Developer"
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        id="department"
                        type="text"
                        placeholder="Engineering"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        id="location"
                        type="text"
                        placeholder="Remote"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="employment-type">Employment type</label>
                      <select
                        id="employment-type"
                        value={employmentType}
                        onChange={(event) => setEmploymentType(event.target.value)}
                      >
                        <option value="">Select employment type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </div>

                    {jobFormMessage && (
                      <p
                        className={
                          jobFormMessage === 'Job created successfully'
                            ? 'form-message success-message'
                            : 'form-message error-message'
                        }
                        role="status"
                      >
                        {jobFormMessage}
                      </p>
                    )}

                    <button type="button" onClick={handleCreateJob}>
                      Create Job
                    </button>
                  </form>
                </section>

                <section className="job-list-card">
                  <p className="section-label">Open Roles</p>
                  <h2>Current jobs</h2>

                  <div className="job-list-item">
                    <div>
                      <h3>Frontend Developer</h3>
                      <p>Engineering • Remote • Full-time</p>
                    </div>
                    <span>Active</span>
                  </div>

                  <div className="job-list-item">
                    <div>
                      <h3>QA Automation Engineer</h3>
                      <p>Quality Engineering • Hybrid • Full-time</p>
                    </div>
                    <span>Active</span>
                  </div>
                </section>
              </div>
            </>
          )}

          {activePage === 'assessments' && (
            <>
              <div className="dashboard-header">
                <div>
                  <p className="section-label">Assessment Management</p>
                  <h1>Assessments</h1>
                  <p className="section-subtitle">
                    Create and manage role-based assessments for candidate evaluation.
                  </p>
                </div>
              </div>

              <div className="jobs-layout">
                <section className="job-form-card">
                  <p className="section-label">Create Assessment</p>
                  <h2>Add a new assessment</h2>

                  <form className="job-form">
                    <div className="form-group">
                      <label htmlFor="assessment-title">Assessment title</label>
                      <input
                        id="assessment-title"
                        type="text"
                        placeholder="Playwright Automation Test"
                        value={assessmentTitle}
                        onChange={(event) => setAssessmentTitle(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="assessment-role">Role</label>
                      <input
                        id="assessment-role"
                        type="text"
                        placeholder="QA Automation Engineer"
                        value={assessmentRole}
                        onChange={(event) => setAssessmentRole(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="assessment-duration">Duration</label>
                      <select
                        id="assessment-duration"
                        value={assessmentDuration}
                        onChange={(event) => setAssessmentDuration(event.target.value)}
                      >
                        <option value="">Select duration</option>
                        <option value="30 Minutes">30 Minutes</option>
                        <option value="45 Minutes">45 Minutes</option>
                        <option value="60 Minutes">60 Minutes</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="assessment-level">Difficulty level</label>
                      <select
                        id="assessment-level"
                        value={assessmentLevel}
                        onChange={(event) => setAssessmentLevel(event.target.value)}
                      >
                        <option value="">Select difficulty level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>

                    {assessmentFormMessage && (
                      <p
                        className={
                          assessmentFormMessage === 'Assessment created successfully'
                            ? 'form-message success-message'
                            : 'form-message error-message'
                        }
                        role="status"
                      >
                        {assessmentFormMessage}
                      </p>
                    )}

                    <button type="button" onClick={handleCreateAssessment}>
                      Create Assessment
                    </button>
                  </form>
                </section>

                <section className="job-list-card">
                  <p className="section-label">Active Assessments</p>
                  <h2>Assessment library</h2>

                  <div className="job-list-item">
                    <div>
                      <h3>Playwright Automation Test</h3>
                      <p>QA Automation Engineer • 45 Minutes • Intermediate</p>
                    </div>
                    <span>Live</span>
                  </div>

                  <div className="job-list-item">
                    <div>
                      <h3>Manual Testing Fundamentals</h3>
                      <p>QA Tester • 30 Minutes • Beginner</p>
                    </div>
                    <span>Live</span>
                  </div>
                </section>
              </div>
            </>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className="auth-layout">
      <section className="hero-panel">
        <div className="hero-top">
          <div className="logo-row">
            <div className="logo-box">R</div>
            <div>
              <p className="brand-name">RecruitIQ</p>
              <p className="brand-subtext">AI-Powered Hiring Platform</p>
            </div>
          </div>

          <div className="hero-badge">Smart Recruitment & Assessment Workspace</div>

          <h1 className="hero-title">
            Hire faster.
            <br />
            Screen smarter.
            <br />
            Decide better.
          </h1>

          <p className="hero-description">
            RecruitIQ helps hiring teams manage jobs, candidate pipelines, and assessments with a
            clean, modern workflow.
          </p>
        </div>

        <div className="hero-metrics">
          <div className="hero-metric-card">
            <p>Open Roles</p>
            <h2>12</h2>
          </div>

          <div className="hero-metric-card">
            <p>Active Candidates</p>
            <h2>48</h2>
          </div>

          <div className="hero-metric-card">
            <p>Assessments Live</p>
            <h2>06</h2>
          </div>
        </div>
      </section>

      <section className="login-panel">
        <div className="login-card">
          <p className="section-label">Welcome Back</p>
          <h2 className="login-title">Sign in to RecruitIQ</h2>
          <p className="login-subtitle">
            Access recruiter tools, manage hiring workflows, and monitor candidate progress.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="recruiter@recruitiq.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {error && (
              <p className="error-message" role="alert">
                {error}
              </p>
            )}

            <button type="submit">Sign In</button>
          </form>

          <p className="demo-note">
            Demo credentials: recruiter@recruitiq.com / Password@123
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;