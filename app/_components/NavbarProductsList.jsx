import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
export default function NavbarProductsList() {
  const [solutions, setsolutions] = useState([]);
  const fetchsolutions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/solutions");
      setsolutions(response.data.solutions);
    } catch (error) {
      console.error("Error fetching solutions:", error);
    }
  };

  useEffect(() => {
    fetchsolutions();
  }, []);

  return (
    <>
      <div className=" flex gap-6 p-2">
        {solutions?.map((e, i) => (
          <div
            className="w-[150px]  bg-blue-50 h-[130px] rounded-xl    "
            key={i}
          >
            <Link
              href={`/allsolutions/${e._id}`}
              className=" block  w-full h-full p-4"
            >
              <h1 className="">{e.solution_title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
