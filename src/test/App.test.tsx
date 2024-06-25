import {render, screen} from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../app/store'
describe('pruebas en <App />', () => {
    test('debe renderiuzar el copmponente', () => {
        //Arrange
        render(
            <Provider store={store}><App /></Provider>
        )

        //Act
        const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)

        //Title
        expect(input).toBeInTheDocument()
    })
})