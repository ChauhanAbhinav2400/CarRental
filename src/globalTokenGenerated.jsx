import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://alxtrip.algodox.co.in/";
const deviceId = {
  deviceId: "sfsdfesdf",
};

const withTokenHandler = (WrappedComponent) => {
  return function WithTokenHandler(props) {
    const [token, setToken] = useState(null);
    const [tokenExpiration, setTokenExpiration] = useState(null);
    let tokenExpirationTimeout;

    useEffect(() => {
      const storedToken = localStorage.getItem("NewToken");
      const storedTokenExpiration = localStorage.getItem("tokenExpiration");

      const generateTokenAndUpdateState = async () => {
        try {
          const tokenResponse = await axios.post(
            baseUrl + "jwt/generate-token",
            "",
            { headers: deviceId }
          );
          const newToken = tokenResponse.data.data;
          const expirationTime = new Date().getTime() + 28 * 60 * 1000; // 28 minutes in milliseconds
          setToken(newToken);
          setTokenExpiration(expirationTime);
          localStorage.setItem("NewToken", JSON.stringify(newToken));
          localStorage.setItem("tokenExpiration", expirationTime);
          setTokenExpirationTimeout(
            setTimeout(() => {
              clearTokenAndExpiration();
              generateTokenAndUpdateState();
            }, expirationTime - new Date().getTime())
          );
        } catch (error) {
          console.error("Error generating token:", error);
          // Handle error here, you can throw the error or handle it gracefully
        }
      };

      const clearTokenAndExpiration = () => {
        localStorage.removeItem("NewToken");
        localStorage.removeItem("tokenExpiration");
        setToken(null);
        setTokenExpiration(null);
        clearTimeout(tokenExpirationTimeout);
      };

      const isTokenValid = (expirationTime) => {
        const currentTime = new Date().getTime();
        const expirationTimeInMillis = new Date(expirationTime).getTime();
        return currentTime < expirationTimeInMillis;
      };

      if (
        storedToken &&
        storedTokenExpiration &&
        isTokenValid(storedTokenExpiration)
      ) {
        setToken(JSON.parse(storedToken));
        setTokenExpiration(storedTokenExpiration);
        setTokenExpirationTimeout(
          setTimeout(() => {
            clearTokenAndExpiration();
            generateTokenAndUpdateState();
          }, storedTokenExpiration - new Date().getTime())
        );
      } else {
        generateTokenAndUpdateState();
      }

      return () => {
        clearTimeout(tokenExpirationTimeout);
      };
    }, []);

    return (
      <WrappedComponent
        token={token}
        tokenExpiration={tokenExpiration}
        generateTokenAndUpdateState={() => {}}
        {...props}
      />
    );
  };
};

export default withTokenHandler;
