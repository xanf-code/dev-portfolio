-- Create projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('released', 'develop', 'progress', 'archived')),
  imageUrl TEXT,
  bgColor TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample data for projects
INSERT INTO projects (title, description, link, status, imageUrl, bgColor) VALUES
('ChillHunt', 'LinkedIn job filter extension', 'https://github.com/xanf-code/linkedin-chillhunt', 'released', '/projects/ChillHunt.jpg', NULL),
('CourseCraft', 'Course recommendation engine (NEU)', 'https://github.com/xanf-code/web-dev-6150-final', 'released', '/projects/CourseCraft.jpeg', NULL),
('Risk Fraud Screener', 'Rule-based fraud detection engine', 'https://github.com/xanf-code/screener-backend', 'progress', '/projects/Placeholder.jpeg', '#2a0a37'),
('InsiderShibu', 'Insider trading monitoring system', 'https://www.producthunt.com/products/insider-shibu#insider-shibu', 'archived', '/projects/shibu.avif', '#3d1a0a'); 