import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPage, PostsPage, UsersPage, CommentsPage, NotFoundPage, HomePage } from './pages';
import { Layout } from './components';

export const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="comments" element={< CommentsPage />} />
          <Route path="notFound" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

