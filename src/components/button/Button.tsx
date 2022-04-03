import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from './Button.styles';

export type ButtonProps = {
    arrowValue?: string;
    click: ActionCreatorWithoutPayload<string>;
};

const Button: FC<ButtonProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <CustomButton
            type='button'
            onClick={() => {
                dispatch(props.click());
            }}
        >
            {props.children}
        </CustomButton>
    );
};

export default Button;
