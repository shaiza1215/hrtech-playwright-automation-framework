import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (email === 'recruiter@recruitiq.com' && password === 'Password@123') {
      setError('');
      setIsLoggedIn(true);
      return;
    }

    setError('Invalid email or password');
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
            <div className="nav-item active">Dashboard</div>
            <div className="nav-item">Jobs</div>
            <div className="nav-item">Assessments</div>
            <div className="nav-item">Candidates</div>
            <div className="nav-item">Reports</div>
          </nav>
        </aside>

        <section className="dashboard-content">
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