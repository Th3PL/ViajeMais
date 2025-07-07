import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Contato.css';

const Contato = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    setShowAlert(true);
    reset();
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      <Container className="contact-container">
        <div className="contact-form-wrapper">
          <h2 className="text-center mb-4">Entre em Contato</h2>
          
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </Alert>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu nome completo"
                {...register('nome', { required: 'Nome é obrigatório' })}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="seu@email.com"
                {...register('email', { 
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMensagem">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Sua mensagem aqui..."
                {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                isInvalid={!!errors.mensagem}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mensagem?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Enviar Mensagem
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contato;