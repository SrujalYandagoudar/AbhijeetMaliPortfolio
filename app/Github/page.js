"use client"
import GitHubCalendar from 'react-github-calendar';

import React from 'react'

export default function Github() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-4xl mx-auto my-14">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
        My GitHub Contributions
      </h2>
      <div className="overflow-x-auto">
        <GitHubCalendar username="maliAbhijeet" />
      </div>
    </div>
    </div>
  )
}
