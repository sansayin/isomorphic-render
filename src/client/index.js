import React from "react";
import Counter from "../comp/Counter";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
createRoot(container).render(<Counter />);

