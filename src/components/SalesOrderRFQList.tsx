const SalesOrderRFQList: React.FC<{ order: Order}> = ({order}) => {

return (
    <div className="p-1">
      <div className="grid grid-cols-6 border-solid border-2 border-sky-600">
        <div className="p-2 bg-black text-white">
          <p className="flex justify-center">{order.order_id}</p>
        </div>
        
        <div className="p-2 text-black">
          <p className="flex justify-center">
            {order.order_created_date.toString()}
          </p>
        </div>
        
        <div className="p-2 bg-black text-white">
          <p className="flex justify-center">{order.customer_name}</p>
        </div>

        <div className="p-2 text-black">
          <p className="flex justify-center">{order.staff_name}</p>
        </div>

        <div className="p-2 bg-black text-white">
          <p className="flex justify-center">{order.phone_number}</p>
        </div>

        <div className="p-2 text-black">
          <p className="flex justify-center">{order.order_status}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderRFQList;