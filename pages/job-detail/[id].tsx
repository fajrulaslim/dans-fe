import React, { useEffect, useState, useRef } from "react";
import { GET } from "@/helpers/api";
import { useRouter } from "next/router";
import Navbar from "../../components/layouts/Navbar";
import Link from 'next/link';

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, getData] = useState<any>(null)

  const createMarkup = (text: string) => {
    return { __html: text };
  };
  const contentRef = useRef<any>();

  const initData = async () => {
    try {
      const result = await GET(`/joblist/detail/${id}`);
      getData(result.data)
      console.log(result.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    initData()
  }, [id])

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-8 px-4">
        <Link href={'/'}>
          <span className="font-bold text-blue-500">{`<< Back`}</span>
        </Link>
        <div className="mt-5 p-8 shadow-lg border border-slate-300 rounded-sm">
          <div className="text-sm text-neutral-200">
            {data?.type} / {data?.location}
          </div>
          <h1 className="text-2xl text-neutral-400">
            {data?.title}
          </h1>
          <div className="mt-4 pt-4 border-t border-slate-500">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div
                  dangerouslySetInnerHTML={createMarkup(data?.description)}
                  ref={contentRef}
                ></div>
              </div>
              <div className="col-span-2">
                <div className="rounded-sm border border-slate-300 shadow-md mb-4">
                  <div className="text-sm font-bold text-neutral-500 p-3 border-b border-slate-500">
                    {data?.company}
                  </div>
                  <div className="p-3">
                    <img src={data?.company_logo} alt="Logo" className="w-full" />
                    <a className="text-xs text-blue-500 underline" href={data?.url}>{data?.url}</a>
                  </div>
                </div>
                <div className="rounded-sm border bg-yellow-50 border-slate-300 shadow-md mb-4">
                  <div className="text-sm font-bold text-neutral-500 p-3 border-b border-slate-500">
                    How to apply
                  </div>
                  <div className="p-3 text-md">
                      <div
                      dangerouslySetInnerHTML={createMarkup(data?.how_to_apply)}
                      ref={contentRef}
                    ></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index