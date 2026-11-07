import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProposalApp } from './ProposalApp';
import '../src/index.css';

const rootElement = document.getElementById('proposal-root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ProposalApp />
    </React.StrictMode>
  );
}
