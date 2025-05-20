import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, Search } from 'lucide-react';

function NotFoundPage() {
  // Update document title
  useEffect(() => {
    document.title = '404 Not Found - AppStore';
  }, []);
  
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-error-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          <Link to="/" className="btn btn-outline">
            <Search className="h-5 w-5 mr-2" />
            Search for Apps
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;