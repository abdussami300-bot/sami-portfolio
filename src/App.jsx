import { useState, useEffect, useCallback } from 'react'
import './App.css'

// Profile photo (p11.png)
import profile from './assets/p11.png'

// Centralized project data and skills
import { projects } from './data/projects'
import { skillCategories } from './data/skills'
import {
  TechLogo,
  CategoryIcon,
  WhatsAppLogo,
  MailLogo,
  LinkedInContactLogo,
  GitHubContactLogo,
} from './components/TechLogos'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    projectIndex: 0,
    imageIndex: 0,
  })

  // Open Lightbox at specific project and image index
  const openLightbox = (projectIndex, imageIndex = 0) => {
    setLightbox({
      isOpen: true,
      projectIndex,
      imageIndex,
    })
  }

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }))
  }, [])

  // Lightbox Next Image
  const nextImage = useCallback(() => {
    setLightbox((prev) => {
      const currentProj = projects[prev.projectIndex]
      const total = currentProj.images.length
      return {
        ...prev,
        imageIndex: (prev.imageIndex + 1) % total,
      }
    })
  }, [])

  // Lightbox Previous Image
  const prevImage = useCallback(() => {
    setLightbox((prev) => {
      const currentProj = projects[prev.projectIndex]
      const total = currentProj.images.length
      return {
        ...prev,
        imageIndex: (prev.imageIndex - 1 + total) % total,
      }
    })
  }, [])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox.isOpen, closeLightbox, nextImage, prevImage])

  const activeProject = projects[lightbox.projectIndex]
  const activeImage = activeProject?.images[lightbox.imageIndex]

  return (
    <div className="portfolio-app">
      {/* ---------------- NAVBAR ---------------- */}
      <header>
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#home" className="logo" aria-label="Abdus Sami Portfolio Homepage">
            Abdus Sami
            <span className="logo-dot" aria-hidden="true" />
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="mobile-dropdown" role="menu">
              <a
                href="#about"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="profile-wrapper">
              <img
                src={profile}
                alt="Abdus Sami portrait"
                className="profile-photo"
                loading="eager"
              />
            </div>

            <div className="role-badge">
              <span className="pulse-indicator" aria-hidden="true" />
              FRONTEND DEVELOPER
            </div>

            <h1>Hi, I&apos;m Abdus Sami</h1>

            <p className="hero-text">
              Frontend Developer building practical web and mobile experiences with
              React, Flutter, and Firebase. Focused on creating clean, usable interfaces
              and turning real-world project requirements into reliable applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View Projects
              </a>
              <a href="#contact" className="button outline">
                Contact Me
              </a>
            </div>

            <div className="quick-links" aria-label="Social and direct links">
              <a
                href="https://github.com/abdussami300-bot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubContactLogo size={16} />
                <span>GitHub</span>
              </a>
              <span className="link-divider" aria-hidden="true">•</span>
              <a
                href="https://www.linkedin.com/in/abdus-sami-209911423"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInContactLogo size={16} />
                <span>LinkedIn</span>
              </a>
              <span className="link-divider" aria-hidden="true">•</span>
              <a href="mailto:abdussami039@gmail.com" aria-label="Send Email">
                <MailLogo size={16} />
                <span>Email</span>
              </a>
              <span className="link-divider" aria-hidden="true">•</span>
              <a
                href="https://wa.me/923410118690"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
              >
                <WhatsAppLogo size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section className="section" id="about">
          <div className="container narrow">
            <p className="section-label">ABOUT</p>
            <h2>Practical application development with clean frontend foundations.</h2>

            <div className="about-text">
              <p>
                I am a Frontend Developer dedicated to building clean, responsive,
                and reliable web and mobile applications. My core work centers on
                React and Flutter, writing straightforward user flows, responsive layouts,
                and maintainable component architectures.
              </p>
              <p>
                On the backend and data side, I regularly integrate Firebase
                solutions—including Firebase Authentication, Cloud Firestore
                real-time databases, and Firebase Storage—to enable smooth,
                role-based workflows for end users.
              </p>
              <p>
                Most of my learning and improvement comes directly through building
                practical applications and solving real-world challenges. My focus is on
                writing readable code, refining UI details, and delivering intuitive,
                dependable experiences.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- SKILLS ---------------- */}
        <section className="section dark-section" id="skills">
          <div className="container">
            <p className="section-label">SKILLS</p>
            <h2>Technologies &amp; Tools</h2>
            <p className="section-subtext">
              Categorized overview of the technologies I work with to build web and
              mobile products.
            </p>

            <div className="skills-grid">
              {skillCategories.map((group) => (
                <div key={group.category} className="skill-category-card">
                  <div className="skill-category-header">
                    <span className="category-icon" aria-hidden="true">
                      <CategoryIcon category={group.category} size={18} />
                    </span>
                    <h3>{group.category}</h3>
                  </div>
                  <div className="skills-list">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        <TechLogo name={skill} size={18} />
                        <span className="skill-name">{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section className="section" id="experience">
          <div className="container narrow">
            <p className="section-label">EXPERIENCE</p>
            <h2>Work History</h2>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Frontend Developer</h3>
                  <p className="company">The Tuitionist</p>
                </div>
                <span className="date-badge">August 2026 – Present</span>
              </div>

              <p className="experience-desc">
                Developing responsive and user-friendly mobile and web
                interfaces. Implementing navigation patterns, reusable UI
                components, input forms, frontend validations, and API integrations
                to deliver smooth digital user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- PROJECTS ---------------- */}
        <section className="section dark-section" id="projects">
          <div className="container">
            <p className="section-label">PROJECTS</p>
            <h2>Featured Projects</h2>
            <p className="section-subtext">
              Real applications built with practical architectures and focused
              user workflows.
            </p>

            <div className="projects-container">
              {projects.map((proj, pIdx) => (
                <article key={proj.id} className="project-card">
                  {/* Left Column: Project Info */}
                  <div className="project-info">
                    <span className="project-number">{proj.number}</span>
                    <h3>{proj.title}</h3>
                    <p className="project-tagline">{proj.tagline}</p>
                    <p className="project-description">{proj.description}</p>

                    <div className="capabilities-box">
                      <p className="capabilities-title">Key Capabilities:</p>
                      <ul className="capabilities-list">
                        {proj.capabilities.map((cap, cIdx) => (
                          <li key={cIdx}>{cap}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tags">
                      {proj.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="button primary small"
                        >
                          View GitHub Code →
                        </a>
                      )}
                      <button
                        type="button"
                        className="button outline small"
                        onClick={() => openLightbox(pIdx, 0)}
                        aria-label={`Inspect all screenshots for ${proj.title}`}
                      >
                        Inspect Screenshots ({proj.images.length}) 🔍
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Screenshot Previews */}
                  <div className="project-gallery">
                    <p className="gallery-hint">
                      Click any screenshot to view full resolution
                    </p>
                    <div className="screenshots-grid">
                      {proj.images.map((imgItem, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="screenshot-card"
                          onClick={() => openLightbox(pIdx, imgIdx)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              openLightbox(pIdx, imgIdx)
                            }
                          }}
                          aria-label={`View ${imgItem.label} screenshot`}
                        >
                          <div className="screenshot-img-wrapper">
                            <img
                              src={imgItem.src}
                              alt={`${proj.title} - ${imgItem.label} (${imgItem.code})`}
                              loading="lazy"
                            />
                            <div className="screenshot-overlay">
                              <span>Zoom In 🔍</span>
                            </div>
                          </div>
                          <div className="screenshot-label-row">
                            <span className="label-text">
                              <strong>{imgItem.code}:</strong> {imgItem.label}
                            </span>
                            <span className="view-indicator">Enlarge</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="section contact" id="contact">
          <div className="container narrow">
            <p className="section-label">CONTACT</p>
            <h2>Have a project in mind?</h2>
            <p className="contact-text">
              I&apos;m open to frontend roles, mobile application projects,
              freelance opportunities, and technical collaborations. Feel free to
              reach out directly.
            </p>

            <div className="contact-grid">
              <a
                href="mailto:abdussami039@gmail.com"
                className="contact-card"
                aria-label="Send Email to abdussami039@gmail.com"
              >
                <div className="contact-icon" aria-hidden="true">
                  <MailLogo size={24} />
                </div>
                <div className="contact-details">
                  <strong>Email</strong>
                  <span>abdussami039@gmail.com</span>
                </div>
                <span className="contact-action">Send Mail →</span>
              </a>

              <a
                href="https://wa.me/923410118690"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="Chat on WhatsApp +923410118690"
              >
                <div className="contact-icon" aria-hidden="true">
                  <WhatsAppLogo size={24} />
                </div>
                <div className="contact-details">
                  <strong>Phone / WhatsApp</strong>
                  <span>+92 341 0118690</span>
                </div>
                <span className="contact-action">Chat on WhatsApp →</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abdus-sami-209911423"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="LinkedIn Profile"
              >
                <div className="contact-icon" aria-hidden="true">
                  <LinkedInContactLogo size={24} />
                </div>
                <div className="contact-details">
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/abdus-sami-209911423</span>
                </div>
                <span className="contact-action">Connect →</span>
              </a>

              <a
                href="https://github.com/abdussami300-bot"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="GitHub Profile"
              >
                <div className="contact-icon" aria-hidden="true">
                  <GitHubContactLogo size={24} />
                </div>
                <div className="contact-details">
                  <strong>GitHub</strong>
                  <span>github.com/abdussami300-bot</span>
                </div>
                <span className="contact-action">Follow →</span>
              </a>
            </div>

            <div className="contact-direct-actions">
              <a
                href="mailto:abdussami039@gmail.com"
                className="button primary"
              >
                Send an Email Directly
              </a>
              <a
                href="tel:+923410118690"
                className="button outline"
              >
                Call: +92 341 0118690
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer>
        <div className="footer-content">
          <p className="copyright">
            © 2026 Abdus Sami • Frontend Developer
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/abdussami300-bot"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdus-sami-209911423"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* ---------------- LIGHTBOX / SCREENSHOT MODAL ---------------- */}
      {lightbox.isOpen && activeProject && activeImage && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="lightbox-header">
              <div className="lightbox-titles">
                <span className="lightbox-project-name">
                  {activeProject.title}
                </span>
                <h3 id="lightbox-title" className="lightbox-screen-name">
                  {activeImage.label}
                  <span className="lightbox-counter">
                    ({lightbox.imageIndex + 1} of{' '}
                    {activeProject.images.length})
                  </span>
                </h3>
              </div>

              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close screenshot preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="lightbox-viewport">
              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={prevImage}
                aria-label="Previous screenshot"
              >
                ‹
              </button>

              <div className="lightbox-image-container">
                <img
                  src={activeImage.src}
                  alt={`${activeProject.title} - ${activeImage.label}`}
                  className="lightbox-main-image"
                />
              </div>

              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={nextImage}
                aria-label="Next screenshot"
              >
                ›
              </button>
            </div>

            {/* Modal Description & Thumbnails */}
            <div className="lightbox-footer">
              <p className="lightbox-description">
                <strong>{activeImage.code}:</strong> {activeImage.description}
              </p>

              {/* Thumbnails Row */}
              <div className="lightbox-thumbnails">
                {activeProject.images.map((imgItem, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`lightbox-thumb-btn ${
                      idx === lightbox.imageIndex ? 'active' : ''
                    }`}
                    onClick={() =>
                      setLightbox((prev) => ({ ...prev, imageIndex: idx }))
                    }
                    aria-label={`Switch to ${imgItem.label}`}
                  >
                    <img src={imgItem.src} alt={imgItem.label} />
                    <span>{imgItem.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App