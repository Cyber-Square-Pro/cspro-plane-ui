"use client";
import React from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const Invite = () => {
  const searchParams = useSearchParams()

  const workspaceName = searchParams.get('workspace_name')


  // Get the first workspace name if available
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-medium text-gray-800">You have been invited to {workspaceName} </h2>
        <p className="mt-2 text-gray-600">
          Your workspace is where you will create projects, collaborate on your issues, and organize different streams of work in your Plane account.
        </p>
        <ul className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
          <li className="flex items-center py-4 cursor-pointer">
            <div className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md mr-3">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 text-gray-700 font-medium hover:text-indigo-500">Accept</div>
            <ChevronRight className="h-5 w-5 text-gray-600 hover:text-indigo-500" />
          </li>
          <li className="flex items-center py-4 cursor-pointer">
            <div className="flex items-center justify-center h-10 w-10 bg-red-500 rounded-md mr-3">
              <X className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 text-gray-700 font-medium hover:text-indigo-500">Ignore</div>
            <ChevronRight className="h-5 w-5 text-gray-600 hover:text-indigo-500" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const InviteWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Invite />
  </Suspense>
);

export default InviteWithSuspense;
