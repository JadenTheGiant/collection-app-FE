import { useEffect, useState } from "react";

type Card = {
  _id: string;
  name: string;
  collected: boolean;
};

const AKPlusV2 = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  const handleToggleCollected = async (id: string, collected: boolean) => {
    const updated = cards.map((c) =>
      c._id === id ? { ...c, collected: !collected } : c
    );
    setCards(updated);

    const token = localStorage.getItem("token");
    await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ id, collected: !collected }),
    });
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">AKPlusV2</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-2 w-14 border border-gray-400 text-center">
                No
              </th>
              <th className="py-3 px-2 w-24 border border-gray-400 text-center">
                Collected
              </th>
              <th className="py-3 px-4 border border-gray-400 text-center w-auto">
                Item
              </th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card._id} className="hover:bg-blue-50 transition-colors">
                <td className="py-3 px-2 border border-gray-400 text-center">
                  {index + 1}
                </td>
                <td className="py-3 px-2 border border-gray-400 text-center">
                  <input
                    type="checkbox"
                    checked={card.collected}
                    onChange={() =>
                      handleToggleCollected(card._id, card.collected)
                    }
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                  />
                </td>
                <td className="py-3 px-4 border border-gray-400 text-start">
                  {card.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AKPlusV2;
