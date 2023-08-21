const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerEditorialPage = ()=>{

    

    useEffect(()=>{

        const url_editorial = `/api/editorial/${id}`

        client({
            method: 'GET',
            path: url_editorial
        }).done((response)=>{setEditorial(response.entity);})

        client({
            method: 'GET',
            path: url_editorial + '/formacion'
        }).done((response)=>{setEditorial(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Editorial</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{editorial.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Editorial</th>  
                    </tr>
                    <tr>
                        <th>Musico</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    {editorial.map(editorial => {
                        return (
                            <tr key={editorial.ID}>
                                <td>{editorial.MUSICO}</td>
                                <td>{editorial.INSTRUMENTO}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-editorial/${id}/nuevo-editorial`}>Nuevo Editorial</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerEditorialPage;