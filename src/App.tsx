import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { EventsPage } from './pages/Events';
import { ComparisonPage } from './pages/Comparison';
import { ContactPage } from './pages/Contact';
import { AboutPage } from './pages/About';
import { ProductPage } from './pages/Product';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
