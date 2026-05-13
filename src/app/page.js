"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "../pages/HomePage/HomePage.jsx";
import DestinationPage from "../pages/DestinationPage/DestinationPage.jsx";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage.jsx";
import NasaCollaboration from "../pages/NasaCollaborationPage/NasaCollaborationPage.jsx";

import { WishlistProvider } from "../context/WishlistContext.jsx";

export default function Home() {
  return <HomePage />;
}
