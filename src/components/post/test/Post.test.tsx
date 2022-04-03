import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

import Post from '../Post';

const testId = 'testingPost';

type PostProps = React.ComponentProps<typeof Post>;

const renderComponent = (props: PostProps) =>
    render(
        <Provider store={store}>
            <Post
                data-testid={testId}
                post={{
                    userId: 0,
                    id: 0,
                    title: 'string',
                    body: 'string',
                }}
            />
        </Provider>
    );

describe('render component', () => {
    it('render component without error', () => {
        expect(renderComponent).not.toThrow();
    });
});
