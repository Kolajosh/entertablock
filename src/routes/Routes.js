import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../view/Onboarding/Landing";
import RegisterAsArtist from "../view/Onboarding/Register/RegisterAsArtist/RegisterAsArtist";
import ArtistLogin from "../view/Onboarding/Login/ArtistLogin/ArtistLogin";
// import Conversation from "../view/Conversation/Conversation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registration-artist" element={<RegisterAsArtist />} />
      <Route path="/login-artist" element={<ArtistLogin />} />
    </Routes>
  );
};

export default AppRoutes;
