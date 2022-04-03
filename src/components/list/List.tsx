import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { Title } from '../app/App.styles';
import Post from '../post/Post';
import quote from '../../assets/quote.svg';
import { ListContainer, CustomList } from './List.styles';

type ListProps = {};

const List: FC<ListProps> = (props) => {
    const posts = useSelector((state: RootState) => state.users.posts);
    const users = useSelector((state: RootState) => state.users.users);

    return (
        <ListContainer>
            {posts.length !== 0 && (
                <Title lineHeight='48px' marginBottom='27px' urlImage={quote}>
                    3 актуальных поста{' '}
                    {users?.filter((item) => item?.id === posts[0]?.userId)[0]?.name}
                </Title>
            )}
            <CustomList>
                {posts?.slice(0, 3).map((item) => (
                    <Post key={item?.id} post={item} />
                ))}
            </CustomList>
        </ListContainer>
    );
};

export default List;
