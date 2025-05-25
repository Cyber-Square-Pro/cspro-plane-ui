import React from 'react'


interface Props {
  url: string;  
  projectName: string; 
  description: string;
  id: number; 
}
const ProjectCard:React.FC<Props> = (props) => {

    const { url, projectName,id, description } = props
    const baseUrl = process.env.NEXT_PUBLIC_BASE_ASSET_URL;
  let imageUrl = baseUrl + url;

console.log('//////////////////////////////', url)
if(!url) {
    
    imageUrl ='/no-project-img.jpeg'
}
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
        <h3 className="text-lg font-semibold text-gray-800 text-center">{projectName}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};



export default ProjectCard