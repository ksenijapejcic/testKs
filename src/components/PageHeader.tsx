import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string; // AC-3: Optional description
}

/**
 * A standardized header for all main dashboard pages.
 * Follows accessibility standards and SEO best practices.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="mb-8 border-b pb-4">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title} {/* AC-2: h1 tag used */}
      </h1>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
};
