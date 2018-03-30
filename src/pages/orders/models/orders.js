import * as usersService from '../services/orders';

export default {
    namespace: 'orders',
    state: {
        list: [],
        total: null,
        page: null,
    },
    reducers: {
        save(state, { payload: { data: list, total, page } }) {
            return { ...state, list, total, page };
        },
    },
    effects: {
        *fetch({ payload: { orderId = 1 } }, { call, put }) {
            const { data, headers } = yield call(usersService.get, { orderId });
            yield put({
                type: 'save',
                payload: {
                    data
                },
            });
        }
    } ,
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/orders') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },
};