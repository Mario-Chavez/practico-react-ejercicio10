import React, { useEffect, useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import CardPelicula from './CardPelicula';

const Formulario = () => {
   const [nombrePeli, setNombrePeli] = useState("");
   const [generoPeli, setGeneroPeli] = useState("");
   const [descripcion, setDescripcion] = useState("")
   
   const listadoPelis = JSON.parse( localStorage.getItem('misPelis')) || [];
   const [listaPeliculas, setListaPeliculas] = useState(listadoPelis)
   
   useEffect(() => {
    localStorage.setItem("misPelis",JSON.stringify(listaPeliculas))
    
  }, [listaPeliculas])

   const handleSubmit =(e)=>{
        e.preventDefault()
        setListaPeliculas([
            ...listaPeliculas,
            {
                nombrePeli,generoPeli,descripcion 
             }
        ])
        setGeneroPeli("")
        setNombrePeli("")
        setDescripcion("")
      
    }

    const handleBorrar = (nombrePeli)=>{
      let arregloFiltrado = listaPeliculas.filter((itemPeli)=>itemPeli.nombrePeli !== nombrePeli)
      setListaPeliculas(arregloFiltrado)
    }

   

    return (
        <> 
            <section>
                <Form  className=' mx-auto formulario p-2 border'onSubmit={handleSubmit} >
                    <div>
                        <h2 className='text-center mb-4'>Peliculas</h2>
                        <p className='text-success fs-4' >Llenar el formulario para crear una Pelicula</p>
                        <hr />
                    </div>
                    <Form.Group  className="d-flex m-2" controlId="nombrePelicula">
                    <Form.Label className='me-3'>Nombre Pelicula:</Form.Label>
                        <Form.Control type="text"
                        placeholder="Escribe el nombre de la Peli"
                        onChange={(e)=>setNombrePeli(e.target.value)}
                        value={nombrePeli}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="d-flex m-2" controlId="genero" >
                        <Form.Label className='me-4'>Genero Pelicula:</Form.Label>
                        <Form.Select  onChange={(e)=>setGeneroPeli(e.target.value)}>
                            <option>Sellecione un genero </option>
                            <option value="accion">Accion</option>
                            <option value="drama">Drama</option>
                            <option value="cienciaFiccion">Ciencia Ficcion</option>
                            <option value="comedia">Comedia</option>
                            <option value="romantica">Romantica</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="d-flex m-2" controlId="descripcion" >
                        <Form.Label className='me-4'>Descripcion:</Form.Label>
                        <Form.Control 
                        as="textarea"
                        placeholder="Escribe un resumen de la pelicula" 
                        onChange={(e)=>setDescripcion(e.target.value)}
                        value={descripcion}
                        required
                        className='ms-2'
                        />
                    </Form.Group>
                    <Form.Group>
                        <div  className='my-5 d-flex justify-content-center '>
                            <Button type='submit' className='px-5 botonFormulario' >Agregar Pelicula</Button>
                        </div>
                    </Form.Group>
                </Form>
            </section>
            <section className="row justify-content-between mt-5">
                     {
                        listaPeliculas.length > 0 
                        ? <CardPelicula listaDePeli ={listaPeliculas} handleBorrar ={handleBorrar} />
                        : <h3 className='text-center border'>No hay Peliculas Agregada</h3>
                    }
                    
            </section>
        </>
    );
};

export default Formulario;