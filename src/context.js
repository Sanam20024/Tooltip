// Import the required modules
import { createContext, useContext } from "react";
import { useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Define the hook function to get the AuthContext values
export function useAuthValue() {
  // Get the value from the context
  const value = useContext(AuthContext);
  // If the value is not defined, throw an error
  if (!value) {
    throw new Error("useAuthValue must be used within an AuthProvider");
  }
  // Return the value
  return value;
}

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  // Initialize the state for the visibility of the tooltip
  const [isVisible, setIsVisible] = useState(false);

  // Define the function to handle the visibility of the tooltip
  function showDiv() {
    setIsVisible(true);
    // Set the background color of the body when the tooltip is visible
    document.body.style.backgroundColor = '#9B61B0 ';
  }

  // Define the function to handle the hiding of the tooltip
  function hideDiv() {
    setIsVisible(false);
    // Reset the background color of the body when the tooltip is hidden
    document.body.style.backgroundColor = '#D269F6';
  }

  // Return the JSX to render the provider component
  return (
    // Use the AuthContext provider to wrap the children components
    <AuthContext.Provider value={{
      isVisible,
      showDiv,
      hideDiv
    }}>
      {children}
    </AuthContext.Provider>
  );
}