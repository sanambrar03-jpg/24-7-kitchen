
export default function TruckerPlans() {
  const combos = [
    {
      title: "COMBO 1",
      price: "$20",
      items: [
        "8 oz Dal",
        "8 oz Sabji",
        "Raita OR Salad",
        "Rice OR Quinoa",
        "10 Rotis",
      ],
    },
    {
      title: "COMBO 2",
      price: "$40",
      items: [
        "12 oz Dal",
        "12 oz Sabji",
        "12 oz Egg / Paneer / Tofu Bhurji",
        "Raita OR Salad",
        "Rice OR Quinoa",
        "20 Rotis",
      ],
    },
    {
      title: "COMBO 3",
      price: "$50",
      items: [
        "16 oz Dal",
        "16 oz Sabji",
        "16 oz Egg / Paneer / Tofu Bhurji",
        "Raita OR Salad",
        "Rice OR Quinoa",
        "20 Rotis",
      ],
    },
  ];

  return (
    <section id="truckers" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600">
            🚛 Truckers Special
          </h2>
          <p className="text-gray-600 mt-3">
            Fresh • Homemade • Hot • Available 24×7
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.title}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-200"
            >
              <h3 className="text-2xl font-bold">{combo.title}</h3>

              <p className="text-3xl text-orange-600 font-bold my-3">
                {combo.price}
              </p>

              <ul className="space-y-2">
                {combo.items.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
              <button
  className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
>
  Order Now
</button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold mb-4">💥 Extras</h3>

          <p>🫓 Add Roti - $0.50 each</p>
          <p>🌾 Desi Ghee Roti - $0.60 each</p>
          <p>✨ Homemade Desi Ghee Available</p>

          <hr className="my-6"/>

          <h3 className="text-2xl font-bold mb-4">🎯 Customize Your Tiffin</h3>

          <p>
            Choose your favourite Dal, Sabji, Rice, Quinoa,
            Paneer, Egg or Tofu.
          </p>

          <p className="mt-4">
            📞 Please text 1 hour before placing your order.
          </p>

          <p className="mt-2">
            📍 Dixie & Bovaird, Brampton
          </p>
        </div>

      </div>
    </section>
  );
}
