import { useState, useEffect } from 'react';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8081/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchContacts();
      } else {
        alert('Error deleting contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Error deleting contact');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-zinc-400">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Contact Management</h2>
        <div className="text-zinc-400">
          Total Contacts: {contacts.length}
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-zinc-400 text-lg">No contacts found</div>
          <div className="text-zinc-500 text-sm mt-2">Contact submissions will appear here</div>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-zinc-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                  <p className="text-violet-400">{contact.email}</p>
                </div>
                <div className="text-right">
                  <div className="text-zinc-400 text-sm">
                    {formatDate(contact.id)} {/* Using ID as timestamp approximation */}
                  </div>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-violet-400 font-medium mb-2">Subject:</h4>
                <p className="text-zinc-300">{contact.subject}</p>
              </div>
              
              <div>
                <h4 className="text-violet-400 font-medium mb-2">Message:</h4>
                <p className="text-zinc-300 whitespace-pre-wrap">{contact.message}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(contact.email);
                      alert('Email copied to clipboard!');
                    }}
                    className="bg-zinc-600 hover:bg-zinc-500 text-white px-4 py-2 rounded-lg transition duration-200"
                  >
                    Copy Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactManagement;
