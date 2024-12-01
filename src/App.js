import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router'

export default function App() {

  return (
    <RouterProvider basename={process.env.PUBLIC_URL} router={router}/>
  );
}