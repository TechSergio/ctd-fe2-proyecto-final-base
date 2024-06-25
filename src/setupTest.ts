import '@testing-library/jest-dom'
import { server } from './mocks/server'

beforeAll(() => {
    console.log('Iniciando...')
    server.listen()
})

afterEach(()=> server.resetHandlers())

afterAll(()=>{
    console.log('apagando..')
    server.close()
})