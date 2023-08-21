const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageEditarMusico = require('./pages/editar-musico');
const PageEditarInstrumento = require('./pages/editar-instrumento');
const PageNuevoInstrumento = require('./pages/nuevo-instrumento');
const PageVerEditorial = require('./pages/ver-editorial');
const PageNuevaEditorial = require('./pages/nueva-editorial');
const NuevoEditorialPage = require('./pages/nuevo-editorial');


const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/editar-musico/:id', element: <PageEditarMusico /> },
	{ path: '/nuevo-musico', element: <PageNuevoMusico /> },
	{ path: '/editar-instrumento/:id', element: <PageEditarInstrumento /> },
	{ path: '/nuevo-instrumento', element: <PageNuevoInstrumento /> },
	{ path: '/nueva-editorial', element: <PageNuevaEditorial /> },
	{ path: '/ver-editorial/:id', element: <PageVerEditorial /> },
	{ path: '/ver-editorial/:id/nuevo-editorial', element: <NuevoEditorialPage /> },

]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)