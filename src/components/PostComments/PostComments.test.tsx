import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

// Criar um código para testar a inserção de dois comentários 
// Utilizar o = data-testid

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários e renderizá-los corretamente', () => {
        render(<PostComment/>); 

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário teste',
            }
        })
        fireEvent.click(screen.getByTestId('button'))

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Segundo Comentário teste',
            }
        })

        fireEvent.click(screen.getByTestId('button'))

        expect(screen.getAllByTestId('comment')).toHaveLength(2)
    })
});

