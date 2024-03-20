import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

   const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": "$30/month",
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to locker rooms",
            "24/7 gym access",
            "Access to basic fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "$50/month",
          "features": [
            "All Basic features",
            "Access to group fitness classes",
            "Access to sauna and steam room",
            "Access to indoor track",
            "Nutritional guidance"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "$80/month",
          "features": [
            "All Standard features",
            "Access to personal training sessions",
            "Access to swimming pool",
            "Access to hot tub and spa",
            "Complimentary towel service"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;