import Form from "next/form"

export const Search = () => {
  return (
    <Form action="/database" className="flex items-center space-x-2 bg-white p-4 rounded shadow-md">
      <input
        type="text"
        name="query"
        placeholder="Введите запрос"
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Поиск
      </button>
    </Form>
  );
};
