interface Order {
    orderID: number;
    price: number;
    date: Date;
    username: string;
}

const saleOrders: Order[] = [
    {
        orderID: 1,
        price: 1,
        date: new Date(Date.now()),
        username: 'usernames1',
    },
    {
        orderID: 2,
        price: 1,
        date: new Date(Date.now()),
        username: 'usernames1',
    }
]