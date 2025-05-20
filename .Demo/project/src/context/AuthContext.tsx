import { createContext, useState, useEffect, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import toast from 'react-hot-toast';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (name: string, email: string, password: string, photoURL?: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (displayName?: string, photoURL?: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Logged in with Google successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, photoURL?: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (result.user) {
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL || 'https://i.ibb.co.com/KzNX4hQq/side-icon.png'
        });
      }
      toast.success('Account created successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const updateUserProfile = async (displayName?: string, photoURL?: string) => {
    try {
      if (!currentUser) {
        throw new Error('No user signed in');
      }
      
      const updates: { displayName?: string; photoURL?: string } = {};
      if (displayName) updates.displayName = displayName;
      if (photoURL) updates.photoURL = photoURL;
      
      await updateProfile(currentUser, updates);
      toast.success('Profile updated successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    loginWithGoogle,
    register,
    logout,
    resetPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};