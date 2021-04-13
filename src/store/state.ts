import { User, Emotion, Answer } from '../interfaces';

const state = {
	token: '',
	user: {} as User,
	page: 1,
	limit: 10,
	answer: ([] as unknown) as Answer,
	emotion: ([] as unknown) as Emotion,
	isLoading: false,
	replyId: null as any
};

type RootState = typeof state;

export { state, RootState };
