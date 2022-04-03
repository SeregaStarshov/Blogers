import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/listCards/listCards.slice';
import { RootState } from '../../store/store';
import List from '../list/List';
import Slider from '../slider/Slider';
import { Title, SubTitle, CustomHeader, Container } from './App.styles';

const App: FC = () => {
    const dispatch = useDispatch();
    const { statusUsers, statusPosts, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className='App'>
            <Container>
                <CustomHeader>
                    <Title marginBottom='25px'>Наши топ-блогеры</Title>
                    <SubTitle lineHeight='27px' textAlign='center' maxWidth='432px'>
                        Лучше специалисты в своем деле, средний опыт работы в профессии - 27 лет
                    </SubTitle>
                </CustomHeader>
                {statusUsers === 'rejected' ? (
                    <h2 style={{ textAlign: 'center' }}>{error}</h2>
                ) : (
                    <Slider />
                )}
                {statusPosts === 'rejected' ? (
                    <h2 style={{ textAlign: 'center', marginTop: '40px' }}>{error}</h2>
                ) : (
                    <List />
                )}
            </Container>
        </div>
    );
};

export default App;
