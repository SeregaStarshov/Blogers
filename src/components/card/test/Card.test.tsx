import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

import Card from '../Card';

const testId = 'testingCard';

type CardProps = React.ComponentProps<typeof Card>;

const cardUser = {
    id: 3,
    image: 'string',
    name: 'Karl',
    username: 'string',
    email: 'string',
    address: {
        street: 'string',
        suite: 'string',
        city: 'string',
        zipcode: 'string',
        geo: {},
    },
    phone: 'string',
    website: 'string',
    company: {
        name: 'string',
        catchPhrase: 'string',
        bs: 'string',
    },
};
const func = jest.fn();
const renderComponent = (props: CardProps) =>
    render(
        <Provider store={store}>
            <Card data-testid={testId} item={cardUser} color={{}} setValueId={func} />
        </Provider>
    );

describe('render component Card', () => {
    it('render component without error', () => {
        expect(renderComponent).not.toThrow();
    });

    it('render image', () => {
        render(
            <Provider store={store}>
                <Card data-testid={testId} item={cardUser} color={{}} setValueId={func} />
            </Provider>
        );
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('check style', () => {
        render(
            <Provider store={store}>
                <Card data-testid={testId} item={cardUser} color={{}} setValueId={func} />
            </Provider>
        );

        expect(screen.getByText('Karl')).toHaveStyle('font-size: 24px');
    });
});
