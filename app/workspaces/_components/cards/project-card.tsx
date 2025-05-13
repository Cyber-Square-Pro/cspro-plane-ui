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
    
    imageUrl ='/noPic.webp'
}
  // Construct the full image URL by combining the base URL and the image path
  return (
      <div className="w-64 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Project Image */}
      <img src={imageUrl} alt={projectName} className="w-full h-40 object-cover" />

      {/* Project Name */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 text-center">{projectName}  </h3>
      </div>
      <div>
        <p>
            {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard