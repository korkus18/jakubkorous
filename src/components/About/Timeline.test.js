import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

describe('Timeline Component', () => {
  test('renders timeline component without crashing', () => {
    render(<Timeline />);
    const timelineContainer = document.querySelector('.timeline-container');
    expect(timelineContainer).toBeInTheDocument();
  });

  test('renders timeline line', () => {
    render(<Timeline />);
    const timelineLine = document.querySelector('.timeline-line');
    expect(timelineLine).toBeInTheDocument();
  });

  test('renders correct number of timeline items', () => {
    render(<Timeline />);
    // Podle Timeline.js máme 7 položek
    const timelineItems = document.querySelectorAll('.timeline-item');
    expect(timelineItems).toHaveLength(7);
  });

  test('renders freelance position', () => {
    render(<Timeline />);
    expect(screen.getByText('Freelance')).toBeInTheDocument();
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument();
  });

  test('renders Leadspicker position', () => {
    render(<Timeline />);
    expect(screen.getByText('Leadspicker')).toBeInTheDocument();
    expect(screen.getByText(/Full-stack Developer \/ Product Builder/)).toBeInTheDocument();
  });

  test('renders University of South Bohemia', () => {
    render(<Timeline />);
    expect(screen.getByText('University of South Bohemia')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Informatics')).toBeInTheDocument();
  });

  test('renders timeline items with correct sides', () => {
    render(<Timeline />);
    const leftItems = document.querySelectorAll('.timeline-item.left');
    const rightItems = document.querySelectorAll('.timeline-item.right');
    
    // Podle Timeline.js: 2 left (university, school), 5 right (práce)
    expect(leftItems).toHaveLength(2);
    expect(rightItems).toHaveLength(5);
  });

  test('each timeline item has a dot', () => {
    render(<Timeline />);
    const dots = document.querySelectorAll('.timeline-dot');
    expect(dots).toHaveLength(7);
  });

  test('each timeline item has a date', () => {
    render(<Timeline />);
    const dates = document.querySelectorAll('.timeline-date');
    expect(dates).toHaveLength(7);
  });

  test('renders correct date for freelance', () => {
    render(<Timeline />);
    expect(screen.getByText('Jan 2023 - Present')).toBeInTheDocument();
  });

  test('renders correct date for Leadspicker', () => {
    render(<Timeline />);
    expect(screen.getByText('Apr 2025 - Feb 2026')).toBeInTheDocument();
  });

  test('timeline items contain descriptions', () => {
    render(<Timeline />);
    const descriptions = document.querySelectorAll('.timeline-box p');
    expect(descriptions.length).toBeGreaterThan(0);
    descriptions.forEach(desc => {
      expect(desc.textContent).not.toBe('');
    });
  });
});
