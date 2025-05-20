import { Store } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Store className="h-16 w-16 text-primary-600 mb-4 animate-pulse-slow" />
      <h2 className="text-xl font-medium mb-2">AppStore</h2>
      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary-600 animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0;
          }
          50% {
            width: 100%;
            margin-left: 0;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;