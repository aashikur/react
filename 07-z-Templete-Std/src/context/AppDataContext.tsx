import { createContext, useState, useEffect, ReactNode } from 'react';
import appData, { AppItem, AppReview } from '../data/appData';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

interface AppDataContextType {
  apps: AppItem[];
  installedApps: string[];
  installApp: (appId: string) => void;
  uninstallApp: (appId: string) => void;
  isAppInstalled: (appId: string) => boolean;
  addReview: (appId: string, rating: number, comment: string) => void;
  trendingApps: AppItem[];
  getAppsByCategory: (category: string) => AppItem[];
  getAppById: (id: string) => AppItem | undefined;
  recentlyInstalledApps: AppItem[];
}

export const AppDataContext = createContext<AppDataContextType | null>(null);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useAuth();
  const [apps, setApps] = useState<AppItem[]>(appData);
  const [installedApps, setInstalledApps] = useState<string[]>([]);
  
  // Load installed apps from local storage
  useEffect(() => {
    if (currentUser) {
      const storedInstalledApps = localStorage.getItem(`installedApps-${currentUser.uid}`);
      if (storedInstalledApps) {
        setInstalledApps(JSON.parse(storedInstalledApps));
      }
    } else {
      setInstalledApps([]);
    }
  }, [currentUser]);
  
  // Save installed apps to local storage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`installedApps-${currentUser.uid}`, JSON.stringify(installedApps));
    }
  }, [installedApps, currentUser]);
  
  const installApp = (appId: string) => {
    if (!currentUser) {
      toast.error('You must be logged in to install apps');
      return;
    }
    
    if (!installedApps.includes(appId)) {
      setInstalledApps(prev => [...prev, appId]);
      toast.success('App installed successfully!');
    }
  };
  
  const uninstallApp = (appId: string) => {
    if (!currentUser) {
      toast.error('You must be logged in to uninstall apps');
      return;
    }
    
    setInstalledApps(prev => prev.filter(id => id !== appId));
    toast.success('App uninstalled successfully!');
  };
  
  const isAppInstalled = (appId: string) => {
    return installedApps.includes(appId);
  };
  
  const addReview = (appId: string, rating: number, comment: string) => {
    if (!currentUser) {
      toast.error('You must be logged in to add a review');
      return;
    }
    
    if (!isAppInstalled(appId)) {
      toast.error('You must install the app before leaving a review');
      return;
    }
    
    const newReview: AppReview = {
      id: Date.now().toString(),
      userId: currentUser.uid,
      userName: currentUser.displayName || 'Anonymous',
      userPhoto: currentUser.photoURL || 'https://i.ibb.co.com/KzNX4hQq/side-icon.png',
      rating,
      comment,
      date: new Date().toISOString()
    };
    
    setApps(prev => 
      prev.map(app => 
        app.id === appId 
          ? { 
              ...app, 
              reviews: [...app.reviews, newReview],
              rating: calculateNewRating(app.reviews, newReview.rating)
            }
          : app
      )
    );
    
    toast.success('Review added successfully!');
  };
  
  const calculateNewRating = (reviews: AppReview[], newRating: number) => {
    const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0) + newRating;
    return Number((totalRatings / (reviews.length + 1)).toFixed(1));
  };
  
  // Get trending apps (sorted by downloads)
  const trendingApps = apps.sort((a, b) => b.downloads - a.downloads).slice(0, 5);
  
  // Get apps by category
  const getAppsByCategory = (category: string) => {
    return apps.filter(app => app.category === category);
  };
  
  // Get app by ID
  const getAppById = (id: string) => {
    return apps.find(app => app.id === id);
  };
  
  // Get recently installed apps
  const recentlyInstalledApps = installedApps
    .map(id => apps.find(app => app.id === id))
    .filter((app): app is AppItem => app !== undefined)
    .slice(0, 3);
  
  const value = {
    apps,
    installedApps,
    installApp,
    uninstallApp,
    isAppInstalled,
    addReview,
    trendingApps,
    getAppsByCategory,
    getAppById,
    recentlyInstalledApps
  };
  
  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};