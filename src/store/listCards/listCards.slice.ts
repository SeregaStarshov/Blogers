import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Geo = {
    [key: string]: string;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type UserPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type CardUser = {
    id: number;
    image: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

type InitialListCards = {
    users: CardUser[];
    posts: UserPost[];
    statusUsers: string | null;
    statusPosts: string | null;
    error: any;
    indexStart: number;
    indexFinish: number;
    step: number;
};

const initialListCards: InitialListCards = {
    users: [],
    posts: [],
    statusUsers: null,
    statusPosts: null,
    error: null,
    indexStart: 0,
    indexFinish: 4,
    step: 4,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await responce.json();

        if (!responce.ok) {
            throw new Error('Что то пошло не так... Server error!');
        }

        return data;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const fetchUserPosts = createAsyncThunk(
    'posts/fetchUserPosts',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error("Can't posts. Server error.");
            }
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const listCards = createSlice({
    name: 'listCards',
    initialState: initialListCards,
    reducers: {
        showPostsUser: (state, action) => {
            state.posts = action.payload;
        },
        nextSlide: (state) => {
            if (state.indexStart < state.users.length && state.indexFinish < state.users.length) {
                state.indexStart += state.step;
                state.indexFinish += state.step;
            }
        },
        prevSlide: (state) => {
            if (state.indexStart > 0) {
                state.indexStart -= state.step;
                state.indexFinish -= state.step;
            }
        },
        errorPost: (state, action) => {
            state.statusPosts = 'rejected';
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.statusUsers = 'resolve';
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.statusUsers = 'rejected';
            state.error = action.payload;
        });

        builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.statusPosts = 'resolve';
            state.posts = action.payload;
        });

        builder.addCase(fetchUserPosts.rejected, (state, action) => {
            state.statusPosts = 'rejected';
            state.error = action.payload;
        });
    },
});

export const { showPostsUser, nextSlide, prevSlide, errorPost } = listCards.actions;

export default listCards.reducer;
