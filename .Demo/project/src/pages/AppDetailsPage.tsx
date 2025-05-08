import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Star, Download as DownloadIcon, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAppData } from '../hooks/useAppData';
import ReviewForm from '../components/ui/ReviewForm';
import ReviewList from '../components/ui/ReviewList';
import StarRating from '../components/ui/StarRating';

function AppDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getAppById, installApp, uninstallApp, isAppInstalled } = useAppData();
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const app = getAppById(id || '');
  const installed = isAppInstalled(id || '');
  
  // Update document title
  useEffect(() => {
    if (app) {
      document.title = `${app.name} - AppStore`;
    }
  }, [app]);
  
  // If app doesn't exist, redirect to 404
  useEffect(() => {
    if (!app && id) {
      navigate('/404');
    }
  }, [app, id, navigate]);
  
  if (!app) {
    return (
      <div className="container-custom py-12 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-error-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">App Not Found</h2>
          <p className="text-gray-600 mb-6">The app you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-primary"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };
  
  const handleInstallToggle = () => {
    if (installed) {
      uninstallApp(app.id);
    } else {
      installApp(app.id);
    }
  };
  
  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };
  
  return (
    <div>
      {/* App Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img 
          src={app.banner} 
          alt={app.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container-custom">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center mb-4 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </button>
            <div className="flex items-center">
              <img 
                src={app.thumbnail} 
                alt={app.name} 
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg mr-4 object-cover"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{app.name}</h1>
                <p className="text-gray-300 mb-2">{app.developer}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1 fill-yellow-400" />
                    <span>{app.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-5 w-5 mr-1" />
                    <span>{formatDownloads(app.downloads)} downloads</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-800/50 text-sm rounded-full">
                    {app.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* App Details */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">About this app</h2>
              <p className="text-gray-700 mb-6">
                {app.description}
              </p>
              
              <h3 className="text-lg font-medium mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {app.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Reviews</h2>
                {installed && (
                  <button 
                    onClick={toggleReviewForm}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    {showReviewForm ? 'Cancel' : 'Write a Review'}
                  </button>
                )}
              </div>
              
              {showReviewForm && (
                <div className="mb-8">
                  <ReviewForm 
                    appId={app.id} 
                    onReviewSubmitted={() => setShowReviewForm(false)}
                  />
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className="pr-6 border-r border-gray-200">
                  <div className="text-3xl font-bold text-center">{app.rating}</div>
                  <div className="flex justify-center mt-1">
                    <StarRating initialRating={app.rating} onChange={() => {}} readOnly />
                  </div>
                  <div className="text-gray-500 text-sm text-center mt-1">
                    {app.reviews.length} reviews
                  </div>
                </div>
                <div className="pl-6 flex-grow">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = app.reviews.filter(r => Math.floor(r.rating) === rating).length;
                      const percentage = app.reviews.length > 0 
                        ? Math.round((count / app.reviews.length) * 100) 
                        : 0;
                      
                      return (
                        <div key={rating} className="flex items-center">
                          <div className="flex-shrink-0 w-10 text-right mr-2 text-sm text-gray-500">
                            {rating} <Star className="h-3 w-3 inline-block" />
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex-shrink-0 w-10 text-left ml-2 text-sm text-gray-500">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <ReviewList reviews={app.reviews} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <button
                onClick={handleInstallToggle}
                className={`w-full py-3 px-4 rounded-lg mb-6 flex items-center justify-center font-medium ${
                  installed
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <DownloadIcon className="h-5 w-5 mr-2" />
                {installed ? 'Uninstall' : 'Install'}
              </button>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Developer</h3>
                  <p>{app.developer}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <p>{app.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Rating</h3>
                  <div className="flex items-center">
                    <StarRating initialRating={app.rating} onChange={() => {}} readOnly size="sm" />
                    <span className="ml-2">{app.rating}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Downloads</h3>
                  <p>{app.downloads.toLocaleString()}</p>
                </div>
              </div>
              
              <hr className="my-6" />
              
              <div className="space-y-4">
                <h3 className="font-medium">Share this app</h3>
                <div className="flex space-x-4">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.4 3.799l-12.9 12.9-3.899-3.899-1.95 1.95 5.85 5.85 14.85-14.85z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Apps Section - This could be implemented in a more advanced version */}
    </div>
  );
}

export default AppDetailsPage;