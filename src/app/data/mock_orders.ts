const sampleOrders: Order[] = [
    {
        order_id: 'ORD001',
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
            "product_id": "P009",
            "product_name": "Razer Blade 15 Laptop",
            "product_price": 1999,
            "product_amount": 20,
            "safety_stock_amount": 2
          },
          {
            "product_id": "P010",
            "product_name": "Apple Watch Series 9",
            "product_price": 399,
            "product_amount": 100,
            "safety_stock_amount": 10
          }  
      ]
    },
    {
        order_id: 'ORD002',
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
            "product_id": "P009",
            "product_name": "Razer Blade 15 Laptop",
            "product_price": 1999,
            "product_amount": 20,
            "safety_stock_amount": 2
          },
          {
            "product_id": "P010",
            "product_name": "Apple Watch Series 9",
            "product_price": 399,
            "product_amount": 100,
            "safety_stock_amount": 10
          }  
      ]
    },

    //   {
    //     order_id: 'ORD003',
    //     customer_name: 'David Lee',
    //     customer_email: 'davidlee123@gmail.com',
    //     phone_number: '+852 8123 4567',
    //     customer_address: '789 Queen\'s Rd, Hong Kong',
    //     order_payment_method: 'Cash on Delivery',
    //     order_status: 'Shipped',
    //     order_created_date: new Date('2023-11-22'),
    //     staff_id: 'EMP003',
    //     staff_name: 'Emily Wang'
    //   },
    //   {
    //     order_id: 'ORD004',
    //     customer_name: 'Maria Garcia',
    //     customer_email: 'maria.garcia@hotmail.com',
    //     phone_number: '+34 91 756 3210',
    //     customer_address: 'Calle Mayor 123, Madrid, Spain',
    //     order_payment_method: 'PayPal',
    //     order_status: 'Delivered',
    //     order_created_date: new Date('2023-11-18'),
    //     staff_id: 'EMP004',
    //     staff_name: 'Carlos Sanchez'
    //   },
    //   {
    //     order_id: 'ORD005',
    //     customer_name: 'Michael Chen',
    //     customer_email: 'michael.chen@yahoo.com',
    //     phone_number: '+86 21 6123 4567',
    //     customer_address: '10th Floor, Building A, Shanghai',
    //     order_payment_method: 'Credit Card',
    //     order_status: 'Cancelled',
    //     order_created_date: new Date('2023-11-20'),
    //     staff_id: 'EMP001',
    //     staff_name: 'Alice Smith'
    //   },
    //   {
    //     order_id: 'ORD006',
    //     customer_name: 'Sarah Jones',
    //     customer_email: 'sarahjones@outlook.com',
    //     phone_number: '+1 212 555 1234',
    //     customer_address: '345 Broadway, New York, NY',
    //     order_payment_method: 'Debit Card',
    //     order_status: 'Pending',
    //     order_created_date: new Date('2023-11-24'),
    //     staff_id: 'EMP005',
    //     staff_name: 'David Miller'
    //   },
    //   {
    //     order_id: 'ORD007',
    //     customer_name: 'Ibrahim Hassan',
    //     customer_email: 'ibrahim.hassan@gmail.com',
    //     phone_number: '+971 4 397 1234',
    //     customer_address: 'Burj Khalifa St, Dubai, UAE',
    //     order_payment_method: 'Credit Card',
    //     order_status: 'Processing',
    //     order_created_date: new Date('2023-11-22'),
    //     staff_id: 'EMP002',
    //     staff_name: 'Bob Johnson'
    //   },
];

export default sampleOrders;