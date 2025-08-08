import React, { useEffect, useState } from "react";

const Noticeboard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // mock data; replace with API fetch later
    setNotices([
      { id: 1, title: "Holiday on Independence Day", date: "2025-08-15", body: "School closed on Independence Day." },
      { id: 2, title: "Parent-Teacher Meeting", date: "2025-09-05", body: "PTM for classes 6-12 at 10:00 AM." },
      { id: 3, title: "Science Exhibition", date: "2025-09-15", body: "Annual science exhibition at school auditorium." },
    ]);
  }, []);

  return (
    <div className="py-12 px-20 bg-[#1e1e1e] min-h-screen">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Noticeboard</h2>
        <div className="space-y-4">
          {notices.map((n) => (
            <div
              key={n.id}
              className="bg-[#2a2a2a] hover:bg-[#333333] transition-colors duration-300 rounded-lg shadow p-5 border border-gray-700"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-100">{n.title}</h3>
                <span className="text-sm text-gray-400">{n.date}</span>
              </div>
              <p className="text-gray-300 mt-2">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticeboard;
