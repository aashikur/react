import { useEffect } from 'react';
import AppSlider from '../components/ui/AppSlider';
import AppCard from '../components/ui/AppCard';
import CategorySection from '../components/ui/CategorySection';
import { useAppData } from '../hooks/useAppData';
import { Download, TrendingUp, Clock } from 'lucide-react';

function HomePage() {
  // Update document title
  useEffect(() => {
    document.title = 'AppStore - Discover & Download Amazing Apps';
  }, []);
  
  const { trendingApps, recentlyInstalledApps } = useAppData();

  return (
    <div>
      <AppSlider />
      
      <section className="py-12">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold">Trending Apps</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>
      
      <CategorySection />
      
      {recentlyInstalledApps.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center mb-8">
              <Clock className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">Recently Installed</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recentlyInstalledApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the AppStore Community
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Discover amazing apps, share your experiences with reviews, and connect with app developers around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-6"
              >
                For Developers
              </a>
              <a 
                href="#" 
                className="btn bg-primary-500 border border-white/20 backdrop-blur-sm hover:bg-primary-600 py-3 px-6"
              >
                <Download className="h-5 w-5 mr-2" />
                Get the App
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">1M+ Downloads</h3>
              <p className="text-white/70">Join millions of satisfied users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">10K+ Apps</h3>
              <p className="text-white/70">Find the perfect app for your needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
              <p className="text-white/70">We're here to help anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;