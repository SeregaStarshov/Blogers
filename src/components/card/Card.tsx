import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CardUser, fetchUserPosts } from '../../store/listCards/listCards.slice';
import { SubTitle, Title } from '../app/App.styles';
import { CustomCard } from './Card.styles';

type CardProps = {
    item: CardUser;
    color?: {
        colorTitle?: string;
        colorSubTitle?: string;
        colorBoxShadow?: string | null;
    };
    setValueId: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card: FC<CardProps> = ({ item, setValueId, color }) => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const response = await fetch(`https://randomuser.me/api/`);
                const data = await response.json();
                setValue(data.results[0].picture.large);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAvatar();
    }, []);

    return (
        <CustomCard
            minHeight='450px'
            minWidth='290px'
            cursor='pointer'
            textAlign='center'
            boxShadow='0 0 10px rgba(0, 0, 0, 0.5)'
            onClick={() => {
                dispatch(fetchUserPosts(item.id));
                setValueId(item.id);
            }}
        >
            <img
                src={value}
                alt='avatar'
                width='290px'
                height='320px'
                style={
                    color?.colorBoxShadow
                        ? {
                              borderBottom: `3px solid ${color?.colorBoxShadow}`,
                          }
                        : { borderBottom: 'none' }
                }
            />
            <Title
                fontWeight='500'
                fontSize='24px'
                lineHeight={'36px'}
                marginTop='15px'
                color={color?.colorTitle}
            >
                {item?.name}
            </Title>
            <SubTitle lineHeight='27px' color={color?.colorSubTitle}>
                {item?.company?.name}
            </SubTitle>
        </CustomCard>
    );
};

export default Card;
