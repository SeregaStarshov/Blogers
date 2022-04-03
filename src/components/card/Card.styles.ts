import styled from 'styled-components';

export type TextAlign = 'center' | 'justify' | 'left' | 'right' | 'start' | 'end' | undefined;

type CustomCardProps = {
    minHeight?: string | null;
    minWidth?: string | null;
    cursor?: string;
    textAlign?: TextAlign;
    boxShadow?: string;
};

const CustomCard = styled.div.attrs({
    id: 'cardId',
})`
    min-height: ${(props: CustomCardProps) => (props.minHeight ? props.minHeight : null)};
    min-width: ${(props) => (props.minWidth ? props.minWidth : null)};
    cursor: ${(props) => (props.cursor ? props.cursor : 'none')};
    text-align: ${(props) => (props.textAlign ? props.textAlign : undefined)};
    box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : 'none')};
`;

export { CustomCard };
