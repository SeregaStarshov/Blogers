import { FC } from 'react';
import { UserPost } from '../../store/listCards/listCards.slice';
import { SubTitle } from '../app/App.styles';

import { CustomPost, Paragraph } from './Post.styles';

type PostProps = {
    post: UserPost;
};

const Post: FC<PostProps> = ({ post }) => {
    return (
        <CustomPost>
            <SubTitle fontWeight='500' fontSize='24px' color='#384758' marginBottom='7px'>
                {post?.title}
            </SubTitle>
            <Paragraph>{post?.body}</Paragraph>
        </CustomPost>
    );
};

export default Post;
