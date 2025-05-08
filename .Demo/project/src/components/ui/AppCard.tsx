import { Link } from 'react-router-dom';
import { Download, Star } from 'lucide-react';
import { useAppData } from '../../hooks/useAppData';
import { AppItem } from '../../data/appData';
import { useAuth } from '../../hooks/useAuth';

interface AppCardProps {
  app: AppItem;
}

function AppCard({ app }: AppCardProps) {
  const { isAppInstalled, installApp, uninstallApp } = useAppData();
  const { currentUser } = useAuth();
  const installed = isAppInstalled(app.id);

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (installed) {
      uninstallApp(app.id);
    } else {
      installApp(app.id);
    }
  };

  return (
    <div className="card group transition-all duration-300 h-full flex flex-col">
      <Link to={`/apps/${app.id}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={app.thumbnail}
            alt={app.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-gray-900/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm flex items-center">
            <Star className="h-3 w-3 text-yellow-400 mr-1" />
            {app.rating}
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-medium text-lg mb-1 line-clamp-1">{app.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{app.developer}</p>
          
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <Download className="h-3 w-3 mr-1" />
            <span>{formatDownloads(app.downloads)} downloads</span>
            <span className="mx-2">•</span>
            <span>{app.category}</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {app.description}
          </p>
          
          {currentUser && (
            <button
              onClick={handleInstallClick}
              className={`mt-auto w-full py-2 rounded-md transition-colors ${
                installed
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {installed ? 'Uninstall' : 'Install'}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}

export default AppCard;