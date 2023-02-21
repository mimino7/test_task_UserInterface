import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './AuthPage';
import { ProfilePage } from './ProfilePage';
import { NewsPage } from './NewsPage';
import { GalleryPage } from './GalleryPage';
import { AuthContext } from '../providers/AuthProvider';

export const AppRouter = () => {
  const { authorized } = useContext(AuthContext);

  if (!authorized) {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} exact />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} exact />
      <Route path="/news" element={<NewsPage />} exact />
      <Route path="/gallery" element={<GalleryPage />} exact />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
