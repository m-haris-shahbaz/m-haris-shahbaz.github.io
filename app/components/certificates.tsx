import React from 'react'


const certificateList = [
    {
        name: "AWS Educate: Getting Started with Networking"
    },
    {
        name: "Goldman Sachs Software Engineering Virtual Experience Program"
    }
]


const Certificates = () => {
  return (
    <div className="space-y-4">
    {certificateList.map((project, index) => (
        <div key={index} className="py-8 border rounded-lg p-4 flex justify-between bg-gray-900 border-gray-600 shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
            </div>
        </div>
    ))}
</div>
  )
}

export default Certificates