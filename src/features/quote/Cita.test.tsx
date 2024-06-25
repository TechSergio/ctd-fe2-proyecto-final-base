// Cita.test.tsx
import React from 'react';
import Quotes from './Cita';
import { render, fireEvent, screen, waitFor } from '../../test-utiles';

describe('Quotes component', () => {
    describe("Cuando carga la pagina", () => {
        test('renderiza al componente', async () => {
            render(<Quotes />);

            const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
            const button = screen.getByText('Obtener cita aleatoria')

            expect(input).toBeInTheDocument()
            expect(button).toBeInTheDocument()

        });
    })

    describe("Al hacer click en cita aleatoria", () => {
        test('deberia cargar una cita aleatoria', async () => {
            render(<Quotes />)
            fireEvent.click(screen.getByRole('button', { name: /Obtener cita aleatoria/i }))

            expect(await screen.findByText(/Oh boy, sleep! That's where I'm a viking!/i)).toBeInTheDocument()
            expect(screen.getByText(/Ralph Wiggum/i)).toBeInTheDocument()
        })
    })
    describe("Al hacer click en obtener cita", () => {
        test('debería cargar una cita de Bart especificado al ingresar su nombre', async () => {
            render(<Quotes />);
            const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
            fireEvent.change(input, { target: { value: 'Bart' } });
            fireEvent.click(screen.getByRole('button', { name: /Obtener cita/i }))


            await waitFor(() => {
                expect(screen.getByText(/You're turning me into a criminal when all I want to be is a petty thug./i)).toBeInTheDocument();
            });
        });
    })

    describe("Cuando el usuario introduce números", () => {
        test("debería renderizar un mensaje de error", async () => {
            render(<Quotes />)
            const input = screen.getByLabelText(/Author Cita/i) as HTMLInputElement;
            fireEvent.change(input, { target: { value: '312312' } });
            const boton = await screen.findByText(/Obtener Cita/i);
            fireEvent.click(boton);
            const mensajeError = await screen.findByText(/Por favor ingrese un nombre válido/i);
            expect(mensajeError).toBeInTheDocument();
        });
    });



})
