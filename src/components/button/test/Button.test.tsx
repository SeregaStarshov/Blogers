import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { prevSlide } from '../../../store/listCards/listCards.slice';
import Button from '../Button';

const testId = 'testingButton';

type ButtonProps = React.ComponentProps<typeof Button>;

const renderComponent = (props: ButtonProps) =>
    render(
        <Provider store={store}>
            <Button data-testid={testId} click={prevSlide} />
        </Provider>
    );

describe('render component', () => {
    it('render component without error', () => {
        expect(renderComponent).not.toThrow();
    });

    it('render', () => {
        render(
            <Provider store={store}>
                <Button click={prevSlide} />
            </Provider>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('check style', () => {
        render(
            <Provider store={store}>
                <Button click={prevSlide} />
            </Provider>
        );
        expect(screen.getByRole('button')).toHaveStyle('cursor: pointer');
    });
});
