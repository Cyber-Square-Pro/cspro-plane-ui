import React, { useState } from 'react'


/*
  Author: sooryasree & Ayisha rafa  on July 2nd, 2024
  Purpose: Email notification under profile settings
*/

export const EmailNotifications = () => {
  const [checkboxes,setCheckboxes]=useState({}); 
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.id]: event.target.checked,
    });
  };

  const isAnyCheckboxChecked = Object.values(checkboxes).some(value => value);


  return (
    
    <div className="mt-20 mx-auto h-full  ">
        <h2 className="text-xl font-semibold mb-4">Email notifications</h2>
        <div>
        <p className="mb-4">Stay in the loop on Issues you are subscribed to. Enable this to get notified.</p>
        <hr className="my-4 border-gray-200  w-full" />
        </div>

        <div className="mb-8">
          <h3 className=" font-semibold mb-2">Notify me when:</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between"> 
              <label className="mt-4 font-semibold text-sm mb-4 text-black-200">Property changes</label>
              <input type="checkbox" id="propertyChanges" className="form-checkbox h-4 w-4 mr-26 text-blue-800 " 
              onChange={handleCheckboxChange}/>
              </div>
              <div>
              <p className="mb-4 text-sm">Notify me when issues properties like assignees, priority, estimates or anything else changes.</p>
            </div>

            <div className="flex items-center justify-between"> 
              <label  className="mt-2 font-semibold text-sm text-black-800">State Change</label>
              <input type="checkbox" id="stateChange" className="form-checkbox h-4 w-4 mr-26 text-blue-800"  
              onChange={handleCheckboxChange}/>
              </div>
              <div>
              <p className="mb-4 text-sm">Notify me when the issues moves to a different state</p>
            </div>

         <div className="border-l-4 border-gray-300  h-full" >
         <div className="flex items-center justify-between"> 
            <label className="mt-2 ml-2 font-semibold text-sm text-black-800">Issue completed</label>
              <input type="checkbox" id="issueCompleted" className="form-checkbox h-4 w-4 mr-26 text-blue-800"
              onChange={handleCheckboxChange} />
            </div>
             <div>
              <p className="mb-4 ml-2 text-sm">Notify me only when an issue is completed</p>
            </div>
            </div>

            <div className="flex items-center justify-between"> 
              <label  className="mt-2 font-semibold text-sm text-black-800">Comments</label>
              <input type="checkbox" id="comments" className="form-checkbox h-4 w-4 mr-26 text-blue-800" 
              onChange={handleCheckboxChange}/>
              </div>
              <div>
              <p className="mb-4 text-sm">Notify me when someone leaves a comment on the issue</p>
            </div>

            <div className="flex items-center justify-between"> 
            <label  className="mt-2 font-semibold text-sm text-black-800">Mentions</label>
              <input type="checkbox" id="mentions" className="form-checkbox h-4 w-4 mr-26  text-blue-800" 
              onChange={handleCheckboxChange}/>
              </div>
              <div>
              <p className="mb-4 text-sm">Notify me only when someone mentions me in the comments or description</p>
            </div>
          </div>
        </div>

        <div>
        <button
          className={`bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none ${!isAnyCheckboxChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isAnyCheckboxChecked}
        >
          Save changes
        </button>
        </div>
      

      </div>
    
  )
  }
  