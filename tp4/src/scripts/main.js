import { createRoot } from 'react-dom/client';

import App from '../components/imageApp.component.jsx';

const bootstrapReact = () => {
    const root = createRoot(document.getElementById('insertReactHere')); 
    const component = <App />;
    root.render(component);
}

//window.addEventListener('DOMContentLoaded', bootstrapReact );
bootstrapReact();

console.log('le bundle a été généré !');
