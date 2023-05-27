import React from 'react';
import { Button, Card } from 'react-bootstrap';
// import Avatar from 'react-avatar';

const CardPelicula = ({listaDePeli,handleBorrar}) => {
    console.log(listaDePeli);
    
    return (
        <>
             {
                listaDePeli.map ((peli,index)=> 
                    <Card key={index} className="my-3 cards col-lg-3 col-md-4 m-1 " >
                    <Card.Body >
                        <div className='d-flex'>
                            <Card.Title className=" mx-auto"> 
                            {peli.nombrePeli}
                            </Card.Title>
                            
                        </div>
                        <hr />
                        <div className="my-4">
                        <Card.Img  src={peli.imagen} className="mx-auto d-block" /> 
                          <Card.Text className='my-3'>Genero : <span className="p-1"> {
                          (peli.generoPeli == "")? "----" : peli.generoPeli
                          } </span></Card.Text>
                          <Card.Text className='my-3'>Descripcion : <span className="p-1"> {peli.descripcion} </span></Card.Text>
                        </div>
                        
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                                <Button className="col-7 botonFormulario" variant="danger" onClick ={()=>handleBorrar(peli.nombrePeli)} >Borrar</Button>
                    </Card.Footer>
                </Card>    
                )
             }
                
            
        </>
    );
};

export default CardPelicula;