import React from 'react';

export const metadata = {
  title: 'Table Tennis Coaching in Pune | The Life Sports',
  description: 'Join the best Table Tennis Academy in Pune. Professional coaching for all skill levels. Certified coaches, modern facilities, and personalized training programs.',
};

export default function TableTennisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 