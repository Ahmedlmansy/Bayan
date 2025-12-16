import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth) {
      setError("Firebase auth is not initialized");
      setLoading(false);
      return;
    }


    

    try {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
          setLoading(false);
          setError(null);
        },
        (error) => {
          console.error("Auth state change error:", error);
          setError(error.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error("Error in useAuth hook:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return { user, loading, error };
}
