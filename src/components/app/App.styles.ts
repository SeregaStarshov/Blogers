import styled from 'styled-components';

type FontWeight = '400' | '500' | '600' | 'bold' | 'normal' | undefined;

export type TitleProps = {
    fontFamily?: string;
    fontWeight?: FontWeight;
    fontSize?: string;
    color?: string;
    marginBottom?: string | null;
    fontStyle?: string;
    lineHeight?: string | null;
    marginTop?: string | null;
    urlImage?: string;
};

export type SubTitleProps = {
    fontFamily?: string;
    fontWeight?: FontWeight;
    fontSize?: string;
    color?: string;
    marginBottom?: string | null;
    fontStyle?: string;
    lineHeight?: string | null;
    textAlign?: string | undefined;
    maxWidth?: string | null;
};

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const CustomHeader = styled.div`
    padding-top: 64px;
    padding-bottom: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1<TitleProps>`
    font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'Poppins')};
    font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '48px')};
    color: ${(props) => (props.color ? props.color : '#384758')};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
    :before {
        content: url(${(props) => (props.urlImage ? props.urlImage : '')});
        position: absolute;
        left: -120px;
    }
`;

const SubTitle = styled.h3<SubTitleProps>`
    font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'Poppins')};
    font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)};
    color: ${(props) => (props.color ? props.color : '#606f81')};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
    text-align: ${(props) => (props.textAlign ? props.textAlign : undefined)};
`;

export { Title, SubTitle, CustomHeader, Container };
