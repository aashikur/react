import { useState, useEffect, FormEvent } from 'react';
import { UserCircle, Camera, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useAppData } from '../hooks/useAppData';
import AppCard from '../components/ui/AppCard';

function ProfilePage() {
  const { currentUser, updateUserProfile } = useAuth();
  const { installedApps, apps } = useAppData();
  
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Get user's installed apps
  const userInstalledApps = apps.filter(app => installedApps.includes(app.id));
  
  // Update document title
  useEffect(() => {
    document.title = 'My Profile - AppStore';
  }, []);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!displayName.trim()) {
      setError('Display name cannot be empty');
      return;
    }
    
    try {
      setIsLoading(true);
      await updateUserProfile(
        displayName || undefined,
        photoURL || undefined
      );
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCancel = () => {
    setDisplayName(currentUser?.displayName || '');
    setPhotoURL(currentUser?.photoURL || '');
    setIsEditing(false);
    setError('');
  };
  
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
                
                {success && (
                  <div className="mb-4 p-3 bg-success-50 text-success-700 rounded-md">
                    <p>{success}</p>
                  </div>
                )}
                
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    {photoURL ? (
                      <img 
                        src={photoURL} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <UserCircle className="w-32 h-32 text-gray-400" />
                    )}
                    <div className="absolute bottom-0 right-0 bg-gray-800 rounded-full p-2">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-full mb-4">
                    <label className="label" htmlFor="photoURL">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      id="photoURL"
                      className="input"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      placeholder="https://example.com/photo.jpg"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Enter the URL of your profile photo
                    </p>
                  </div>
                  
                  <div className="w-full">
                    <label className="label" htmlFor="displayName">
                      Display Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      className="input"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-outline flex-1"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  {currentUser?.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt="Profile" 
                      className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                  ) : (
                    <UserCircle className="w-32 h-32 text-gray-400 mx-auto" />
                  )}
                </div>
                
                <h2 className="text-xl font-bold mb-1">
                  {currentUser?.displayName || 'User'}
                </h2>
                <p className="text-gray-600 mb-6">{currentUser?.email}</p>
                
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary w-full"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="font-medium text-lg mb-4">Account Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{currentUser?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Created</p>
                <p>{currentUser?.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'Unknown'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Sign In</p>
                <p>{currentUser?.metadata.lastSignInTime ? new Date(currentUser.metadata.lastSignInTime).toLocaleDateString() : 'Unknown'}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">My Installed Apps</h2>
            
            {userInstalledApps.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">You haven't installed any apps yet.</p>
                <a href="/" className="btn btn-primary">
                  Browse Apps
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userInstalledApps.map(app => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;