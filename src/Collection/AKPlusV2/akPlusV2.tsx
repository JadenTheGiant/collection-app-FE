import { useState } from "react";

type Card = {
  id: number;
  name: string;
  collected: boolean;
};

const AKPlusV2 = () => {
  // Dummy data (will come from backend later)
  const [cards, setCards] = useState<Card[]>([
    { id: 1, name: "Fire Dragon", collected: false },
    { id: 2, name: "Water Serpent", collected: true },
    { id: 3, name: "Thunder Wolf", collected: false },
    { id: 4, name: "Mystic Phoenix", collected: false },
  ]);

  // Toggle collected status
  const handleToggleCollected = (id: number) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, collected: !card.collected } : card
      )
    );

    // TODO: Future backend sync
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        AKPlusV2
      </h1>

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
              <tr
                key={card.id}
                className="hover:bg-blue-50 transition-colors"
              >
                <td className="py-3 px-2 border border-gray-400 text-center">
                  {index + 1}
                </td>
                <td className="py-3 px-2 border border-gray-400 text-center">
                  <input
                    type="checkbox"
                    checked={card.collected}
                    onChange={() => handleToggleCollected(card.id)}
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                  />
                </td>
                <td className="py-3 px-4 border border-gray-400 text-center">
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
