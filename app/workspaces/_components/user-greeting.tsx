// Greeting.tsx
"use client";
import React, { useEffect, useState } from "react";
import { CalendarDays, Clock3, Sparkles } from "lucide-react";

/* 
  Author:  Reshma LB on April 23rd, 2024
  Purpose: Display greetings on the dashboard 
  Props: diplayName
  Updated by: - Mohammed Rifad on June 2nd, 2024 - Props added 
*/
interface Props {
  displayName: string;
}

export const UserGreeting: React.FC<Props> = (( props ) => {
  const { displayName } = props
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Good morning,");

  useEffect(() => {
    updateGreeting(new Date());

    const minuteInterval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now);
      updateGreeting(now);
    }, 60000);

    return () => {
      clearInterval(minuteInterval);
    };
  }, []);

  const updateGreeting = (date: Date) => {
    const hour = date.getHours();
    let greetingMessage = "Good ";

    const split_afternoon = 12; //24hr time to split the afternoon
    const split_evening = 17; //24hr time to split the evening

    if (hour >= split_afternoon && hour <= split_evening) {
      greetingMessage += "afternoon,";
    } else if (hour >= split_evening) {
      greetingMessage += "evening,";
    } else {
      greetingMessage += "morning,";
    }

    setGreeting(greetingMessage);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const getContextMessage = (date: Date) => {
    const hour = date.getHours();

    if (hour < 12) return "Time to plan and prioritize your day.";
    if (hour < 17) return "Momentum looks good. Keep your key tasks moving.";
    return "Wrap up your wins and set up tomorrow for success.";
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-gray-50 p-5 sm:p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-slate-900">
          {greeting} {displayName || "there"}
        </h3>
        <p className="text-sm sm:text-base text-slate-600">{getContextMessage(currentDateTime)}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 border border-slate-200">
          <CalendarDays size={14} className="text-sky-700" />
          {formatDate(currentDateTime)}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 border border-slate-200">
          <Clock3 size={14} className="text-sky-700" />
          {formatTime(currentDateTime)}
        </span>
      </div>
    </div>
  );
});
