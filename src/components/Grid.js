import React, { useEffect, useState } from "react";
import axios from "axios";

import Approval from "./Approval";
import Scheduled from "./Scheduled";
import History from "./History";
import Graph from "./Graph";

const Grid = () => {
  const [users, setUsers] = useState([]);
  const [history, setHistory] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState({
    UserLoading: true,
    HistoryLoading: true,
    ScheduleLoading: true,
    GraphLoading: true,
  });

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://sagris.com.br/teste-front/api/access-approval"
        );
        setUsers([...response.data.data.access_approval]);
        setLoading(!loading.UserLoading);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();

    async function getHistory() {
      try {
        const response = await axios.get(
          "https://sagris.com.br/teste-front/api/last-access"
        );
        setHistory([...response.data.data.last_access]);
        setLoading(!loading.HistoryLoading);
      } catch (error) {
        console.error(error);
      }
    }
    getHistory();

    async function getSchedule() {
      try {
        const response = await axios.get(
          "https://sagris.com.br/teste-front/api/scheduled"
        );
        setSchedule([...response.data.data.scheduled]);
      } catch (error) {
        console.error(error);
      }
    }
    getSchedule();
  }, []);

  return (
    <div className="py-3 pl-56 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left ml-4">
          <h2 className="text-2xl font-bold text-navy-blue tracking-wide">
            Home
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div>
            <Approval users={users} loading={loading} />
          </div>

          <div>
            <History history={history} loading={loading} />
          </div>

          <div>
            <Scheduled
              schedule={schedule}
              loading={loading}
              setLoading={setLoading}
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
