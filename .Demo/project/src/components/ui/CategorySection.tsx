import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Gamepad2 } from 'lucide-react';
import { categories } from '../../data/appData';
import { useAppData } from '../../hooks/useAppData';
import AppCard from './AppCard';

function CategorySection() {
  const { getAppsByCategory } = useAppData();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
        
        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8 no-scrollbar">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-lg p-4 min-w-[150px] hover:border-primary-500 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-3">
                  {getIconComponent(category.icon)}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {categories.map((category) => {
          const apps = getAppsByCategory(category.name);
          if (apps.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  {getIconComponent(category.icon)}
                  <span className="ml-2">{category.name}</span>
                </h3>
                <Link to="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {apps.slice(0, 4).map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;