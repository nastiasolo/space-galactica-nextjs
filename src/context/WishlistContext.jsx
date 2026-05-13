"use client";
import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (planet) => {
    setPlanetsWishlist((prev) => {
      const existsById = prev.some((p) => p.id === planet.id);

      const existsByName = prev.some((p) => p.name === planet.name);

      if (existsById || existsByName) {
        console.log("Planet already on the list");
        return prev;
      }

      return [...prev, planet];
    });
  };

  const removePlanetFromWishlist = (id) => {
    setPlanetsWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const isPlanetInWishlist = (name) => {
    return planetsWishlist.some((p) => p.name === name);
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
