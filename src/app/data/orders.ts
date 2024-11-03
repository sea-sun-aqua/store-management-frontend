interface Order {
    order_id:string,
    customer_name:string,
    customer_email:string,
    phone_number:string,
    customer_address:string,
    order_payment_method:string
    order_status:string,
    order_created_date: Date,
    staff: User,
    products: Product[],
}