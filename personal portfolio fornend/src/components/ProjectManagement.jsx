import { useState, useEffect } from 'react';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    tools: '',
    websiteUrl: '',
    isActive: true
  });

  // Helper function to safely parse tools
  const parseTools = (tools) => {
    if (!tools) return [];
    if (Array.isArray(tools)) return tools;
    if (typeof tools === 'string') {
      return tools.split(',').map(t => t.trim()).filter(t => t);
    }
    return [];
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/projects', {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Retry after 2 seconds if it fails
      setTimeout(() => {
        if (projects.length === 0) {
          fetchProjects();
        }
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      tools: formData.tools // Keep as string, don't convert to array
    };

    try {
      const url = editingProject 
        ? `http://localhost:8081/api/projects/${editingProject.id}`
        : 'http://localhost:8081/api/projects';
      
      const method = editingProject ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        fetchProjects();
        resetForm();
        setShowModal(false);
      } else {
        alert('Error saving project');
      }
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8081/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchProjects();
      } else {
        alert('Error deleting project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      imageUrl: project.imageUrl,
      tools: Array.isArray(project.tools) ? project.tools.join(', ') : project.tools || '',
      websiteUrl: project.websiteUrl,
      isActive: project.isActive
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      imageUrl: '',
      tools: '',
      websiteUrl: '',
      isActive: true
    });
    setEditingProject(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-zinc-400">Loading projects...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Project Management</h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Add New Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-zinc-800 rounded-lg p-6">
            <div className="mb-4">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              {project.tools && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {parseTools(project.tools).map((tool, index) => (
                    <span key={index} className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs ${
                  project.isActive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}>
                  {project.isActive ? 'Active' : 'Inactive'}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-white mb-4">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Project Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Tools (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tools}
                  onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Website URL</label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-sm text-zinc-300">Active</label>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-violet-700 hover:bg-violet-600 text-white py-2 rounded-lg transition duration-200"
                >
                  {editingProject ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="flex-1 bg-zinc-600 hover:bg-zinc-500 text-white py-2 rounded-lg transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;
