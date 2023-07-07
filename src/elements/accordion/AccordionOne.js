import React from 'react'
import { Accordion } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ backgroundColor: "#2f6740" }}>
            <h6 style={{ color: "black" }}>
              - Cómo alquilo barriles y bateas
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Por el alquiler de barriles de cerveza artesanal, podés
            comunicarte al 3814486233 (Rodrigo Avila) y te darán toda
            la información.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h6 style={{ color: "black" }}>
              - No puedo reservar por la APP ¿Cómo puedo hacer?
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Podés hacer tu reserva a través de una llamada telefónica
            a nuestras sucursales. Barrio Norte 4840812 / Yerba Buena
            4858001 (Lun a Dom desde las 19:00hs)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h6 style={{ color: "black" }}>
              - ¿Cómo compro y/o recargo mi botellón?
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Podés comprar tu botellón o recargarlo todos los días en
            nuestras sucursales. Consultá los precios enviando un MD a
            nuestro Instagram.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h6 style={{ color: "black" }}>
              - ¿Cuál es el horario del Happy Hour?{" "}
            </h6>{" "}
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Nuestro Happy Hour es TODOS LOS DÍAS con precios
            promocionales en cervezas y tragos. Consultá los horarios
            en nuestras redes sociales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h6 style={{ color: "black" }}>- ¿Que días atienden? </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            ABRIMOS TODOS LOS DÍAS DE LA SEMANA en nuestras 2
            sucursales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Tienen Productos Sin Tacc?{" "}
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Contamos con opciones sin tacc dentro de nuestro menú pero
            vale aclarar que se elaboran en el mismo ambiente que el
            resto de la comida. Tenemos papas, ensaladas, burgers,
            burritos y cerveza sin gluten.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Puedo pagar con tarjeta?{" "}
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Sí, recibimos Visa y MasterCard (débito y crédito).
            También recibimos pagos con Mercado Pago.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Puedo llevar mi mascota?{" "}
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Nuestras sucursales son PET FRIENDLY en sus espacios al
            aire libre. Podés venir con tus mascotas!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Tengo que llevar mi DNI?
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Se puede solicitar DNI para venta de alcohol o canje de
            beneficios por lo que recomendamos siempre contar con el
            mismo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Pueden ir menores de edad?
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Sí, permitimos el ingreso de menores de edad en nuestras
            sucursales pero no vendemos bebidas con alcohol a menores
            de 18 años.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h6 style={{ color: "black" }}>
              - ¿Cuánto tiempo de validez tienen los beneficios?
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Los beneficios de cumpleaños son válidos una semana
            (anterior o posterior) a la fecha de cumple.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Son acumulables los Beneficios?{" "}
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Los beneficios no son acumulables con otras promociones,
            haciéndose válido solo uno de los mismos (el de más
            conveniencia para el cliente).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            {" "}
            <h6 style={{ color: "black" }}>
              - ¿Cómo puedo enviar mi CV?{" "}
            </h6>
          </Accordion.Header>
          <Accordion.Body
            style={{ backgroundColor: "#2f6740", color: "white" }}
          >
            Podés consultar en la pestaña de “Trabajá con nosotros” la
            info necesaria para el envío de CV. Recomendamos siempre
            la versión digital en el mail para contar con el CV en
            futuras búsquedas.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
       
    )
}
export default AccordionOne

