import React, { useEffect, useState } from "react";
import { GET } from "@/helpers/api";
import Navbar from "../components/layouts/Navbar";
import Link from 'next/link';
import SearchForm from "../components/layouts/SearchForm";
import moment from "moment";

export default function Home(props: any) {

  const [data, getData] = useState<any>(null)

  const initData = async () => {
    try {
      const result = await GET(`/joblist`);
      console.log(result.data)
      getData(result.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <Navbar />
      <SearchForm />
      <div className="max-w-7xl mx-auto my-8 px-4">
        <div className="p-8 shadow-lg border border-slate-300 rounded-sm">
          <div className="font-bold text-2xl">
            Job Lists
          </div>
          <div className="mt-5">
            {
              data?.map((item: any, index: any) => {
                const dateA = moment(item?.created_at, 'ddd MMM DD HH:mm:ss UTC YYYY');
                const today = moment();
                const daysAgo = today.diff(dateA, 'days');
                return (
                  <Link href={`/job-detail/${item?.id}`}>
                    <div className="py-4 flex justify-between items-center border-t border-slate-500">
                      <div>
                        <p className="text-blue-500 font-bold text-lg">{item?.title}</p>
                        <div className="text-sm">
                          <span className="text-neutral-400 font-thin">{item?.company}</span>
                          <span className="text-green-500 font-semibold"> - {item?.type}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <p>{item?.location}</p>
                        <span className="text-neutral-200">{daysAgo} day ago</span>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  );
}
