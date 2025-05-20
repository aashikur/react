import { useEffect } from 'react';
import { Shield, Globe, Users, Code, Star } from 'lucide-react';

function AboutPage() {
  // Update document title
  useEffect(() => {
    document.title = 'About - AppStore';
  }, []);
  
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AppStore
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Discover and download amazing apps for all your devices. We connect users with the 
              best apps while helping developers reach a global audience.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At AppStore, we believe in the power of great software to transform lives. Our mission is to create 
                a platform where users can discover high-quality apps that enhance their daily experiences, while 
                providing developers with the tools and audience they need to succeed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're committed to maintaining a secure, diverse marketplace that celebrates innovation and creativity. 
                Our curated approach ensures that every app meets our high standards for quality, security, and user experience.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">10K+</h3>
                  <p className="text-gray-600">Quality Apps</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">5M+</h3>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">150+</h3>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">2K+</h3>
                  <p className="text-gray-600">Developers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Security & Trust</h3>
              <p className="text-gray-700">
                We rigorously vet all apps to ensure they meet the highest standards of security and privacy.
                Your data and safety are our top priorities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Focus</h3>
              <p className="text-gray-700">
                We believe in the power of community feedback to drive improvement. User reviews help 
                both developers and other users make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <Code className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Developer Support</h3>
              <p className="text-gray-700">
                We empower developers with tools, resources, and a platform to showcase their talents
                and connect with users who will love their creations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-gray-700 mb-8">
              Whether you're a user looking for the perfect app or a developer ready to share your creation with the world, 
              AppStore is the place for you. Join our growing community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="btn btn-primary">
                Create an Account
              </a>
              <a href="#" className="btn btn-outline">
                Developer Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;