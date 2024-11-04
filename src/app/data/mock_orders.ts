const sampleOrders: Order[] = [
    {
        order_id: 'OD0001',
        customer_name: 'John Doe',
        customer_email: 'johndoe@example.com',
        phone_number: '0812345678',
        customer_address: '123 Main St, Anytown, CA',
        order_payment_method: 'Credit Card',
        order_status: 'Pending',
        order_created_date: new Date('2023-11-23'),
        staff: {
            staff_id: "U001",
            staff_name: "Fluke",
            staff_email: "moore@example.com",
        },
        products:     [
        {
            "product_id": "PD0001",
            "product_name": "Razer Blade 15 Laptop",
            "product_price": 1999,
            "order_amount": 20,
          },
          {
            "product_id": "PD0001",
            "product_name": "Apple Watch Series 9",
            "product_price": 399,
            "order_amount": 100,
          }  
      ]
    },
    {
        order_id: 'OD0002',
        customer_name: 'John Doe',
        customer_email: 'johndoe@example.com',
        phone_number: '0812345678',
        customer_address: '123 Main St, Anytown, CA',
        order_payment_method: 'Credit Card',
        order_status: 'Pending',
        order_created_date: new Date('2023-11-23'),
        staff: {
            staff_id: "U001",
            staff_name: "Fluke",
            staff_email: "moore@example.com",
        },
        products:     [
        {
            "product_id": "PD0001",
            "product_name": "Razer Blade 15 Laptop",
            "product_price": 1999,
            "order_amount": 20,
          },
          {
            "product_id": "PD0002",
            "product_name": "Apple Watch Series 9",
            "product_price": 399,
            "order_amount": 100,
          }  
      ]
    },
];

export default sampleOrders;