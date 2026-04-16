import React from 'react'


interface Props {
  url: string;  
  projectName: string; 
  description: string;
  id: number; 
  status: 'Active' | 'Completed'; // Added status
  createdAt: string; // string representation of date
}
const ProjectCard:React.FC<Props> = (props) => {

    const { url, projectName,id, description, status, createdAt } = props
    const baseUrl = process.env.NEXT_PUBLIC_BASE_ASSET_URL;
  let imageUrl = baseUrl + url;

console.log('//////////////////////////////', url)
if(!url) {
    
    imageUrl ='/no-project-img.jpeg'
}
const formattedDate = new Date(createdAt).toLocaleDateString(); //dateformat
  // Construct the full image URL by combining the base URL and the image path
  return (
      
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg border border-gray-200 flex flex-col">
      
      {/* Project Image */}
      <img
        src={imageUrl}
        alt={projectName}
        className="w-full h-40 object-cover"
      />

      {/* Project Details */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{projectName}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>{status}</span> {/* Status */}
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        {/* Date Row */}
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
        <span>Created: {formattedDate}</span>
        </div>
      </div>
      </div>
  );
};



export default ProjectCard