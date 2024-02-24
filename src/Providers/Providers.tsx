import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      {/* Wrap <App /> component with your providers */}
      {children}
      <ToastContainer />
    </>
  );
};

export default Providers;
