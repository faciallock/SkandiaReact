import request from '../../../utils/request';

export function get({ orderId}) {
    return request(`/skandia/orderDetails?orderId=${orderId}`);
}