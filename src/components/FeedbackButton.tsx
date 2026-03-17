import React, { useState } from 'react';
import { Button } from './ui/button'; // Assuming you have a UI library, or use <button>
import { Bell, MessageSquare } from 'lucide-react';

export const EnhancedFeedbackButton = () => {
  const [count, setCount] = useState(0);

  const handleFeedbackClick = () => {
    // Basic logic to test CodeMerlin's review
    setCount((prev) => prev + 1);
    console.log("Feedback submitted successfully");
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-card">
      <div className="relative">
        <Bell className="w-6 h-6 text-muted-foreground" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground animate-pulse">
            {count}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Developer Feedback</h3>
        <p className="text-xs text-muted-foreground">Help us improve the CodeMerlin experience.</p>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleFeedbackClick}
        className="ml-auto flex items-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        Send Feedback
      </Button>
    </div>
  );
};
