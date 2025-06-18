import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Simple spinner component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
  

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // While Firebase is checking the auth state, show a loading spinner.
    // This prevents the premature redirect.
    return <LoadingSpinner />; 
  }

  if (!currentUser) {
    // NOW that loading is done, if there's still no user, we can safely redirect.
    // Save the location they were trying to go to, so we can send them back after login.
    return <Navigate to="/join" state={{ from: location }} replace />;
  }

  // If loading is done AND we have a user, show the protected content.
  return <>{children}</>;
};

export default ProtectedRoute;