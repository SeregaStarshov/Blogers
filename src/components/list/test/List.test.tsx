import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

import List from '../List';

const testId = 'testingList';

type ListProps = React.ComponentProps<typeof List>;

const renderComponent = (props: ListProps) =>
    render(
        <Provider store={store}>
            <List data-testid={testId} />
        </Provider>
    );

describe('render component', () => {
    it('render component without error', () => {
        expect(renderComponent).not.toThrow();
    });
});
