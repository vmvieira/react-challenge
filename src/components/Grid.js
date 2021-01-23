import React, { useEffect, useState } from "react";
import axios from "axios";

import Approval from "./Approval";
import Scheduled from "./Scheduled";
import History from "./History";
import Graph from "./Graph";

const Grid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://sagris.com.br/teste-front/api/access-approval"
        );
        setUsers([...response.data.data.access_approval]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="py-8 pl-72 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left ml-4">
          <h2 className="text-2xl font-bold text-navy-blue tracking-wide">
            Home
          </h2>
        </div>

        <div className="mt-10">
          <dl className="md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <Approval users={users} loading={loading} />
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Grid;
