import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

import Slider from '../Slider';

const testId = 'testingSlider';

type SliderProps = React.ComponentProps<typeof Slider>;

const renderComponent = (props: SliderProps) =>
    render(
        <Provider store={store}>
            <Slider data-testid={testId} />
        </Provider>
    );

describe('render component', () => {
    it('render component without error', () => {
        expect(renderComponent).not.toThrow();
    });
});
