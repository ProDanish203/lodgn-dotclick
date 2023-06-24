import React from 'react'
import { hash } from "../Assets";

const cardData = [
  {
    desc: "1.5 miles away from joblocation. ",
    singles: 120,
    doubles: 145,
    rare: true,
    img: hash
  },
  {
    desc: "1.5 miles away from joblocation. ",
    singles: 120,
    doubles: 145,
    rare: false,
    img: hash
  },
  {
    desc: "1.5 miles away from joblocation. ",
    singles: 120,
    doubles: 145,
    rare: false,
    img: hash
  }
]

const Card = () => {
  return (
    <div className="w-full bg-white px-2 py-4 shadow-2xl rounded-md my-5 mt-10">

        <div className="flex items-center justify-start flex-wrap gap-5 px-5 py-5">

          <div className="border-right pr-5">
            <h3 className="text-2xl text-primary font-semibold">St Judes Hospital</h3>
            <p className="text-sm text-txt">Sarasota.FL 33178</p>
          </div>

          <div className="border-right pr-5">
            <div className="flex justify-evenly items-center gap-2 relative">
              <div>
                <h3 className="text-2xl text-primary font-semibold">10</h3>
                <p className="text-sm text-txt">October</p>
              </div>

              <h3 className="text-2xl text-primary font-bold pb-5 pr-5">-</h3>

              <div>
                <h3 className="text-2xl text-primary font-semibold">17</h3>
                <p className="text-sm text-txt">December</p>
              </div>
            </div>
          </div>

          <div className="border-right pr-5">
            <h3 className="text-2xl text-primary font-semibold">20 Rooms</h3>
            <p className="text-sm text-txt">10 Singles, 10 doubles</p>
          </div>

        </div>

        <div className="flex items-center my-6 justify-between gap-2 w-full rounded-full border border-txt">
          <div className="bg-[#FDF307] round-left border-right w-full p-3">
            Received
          </div>
          <div className="border-right w-full py-3 text-center">
            Negotiating
          </div>
          <div className="w-full text-center">
            Completed
          </div>
        </div>

    </div>
  )
}

const CompletedCard = () => {
  return (
    <div className="w-full bg-white py-10 px-7 shadow-2xl rounded-[50px] my-5 mt-10">

        <div className="flex items-center justify-start flex-wrap gap-5 ">

          <div className="border-right pr-5">
            <h3 className="text-2xl text-primary font-semibold">St Judes Hospital</h3>
            <p className="text-sm text-txt">Sarasota.FL 33178</p>
          </div>

          <div className="border-right pr-5">
            <div className="flex justify-evenly items-center gap-2 relative">
              <div>
                <h3 className="text-2xl text-primary font-semibold">10</h3>
                <p className="text-sm text-txt">October</p>
              </div>

              <h3 className="text-2xl text-primary font-bold pb-5 pr-5">-</h3>

              <div>
                <h3 className="text-2xl text-primary font-semibold">17</h3>
                <p className="text-sm text-txt">December</p>
              </div>
            </div>
          </div>

          <div className="border-right pr-5">
            <h3 className="text-2xl text-primary font-semibold">20 Rooms</h3>
            <p className="text-sm text-txt">10 Singles, 10 doubles</p>
          </div>

        </div>

        <div className="my-6 sm:w-[80%] w-full">
          <div className="bg-primary text-white rounded-full border-right w-full p-3 border-txt">
            Completed
          </div>
        </div>

        <div className="flex items-center justify-between sm:px-10 px-2 gap-2 flex-wrap">
          {cardData.map((data, idx) => (
            <div className="relative bg-[#F5F4F4] pt-4 flex flex-col items-center justify-center gap-2 mt-5 rounded-md">
                <img src={data.img} alt="icon" className="w-[70px]" />
                <p className="text-xl text-[#85C371] italic mb-2">Holiday Inn</p>

                {data.rare && (
                  <button className="bg-[#D96A6B] px-4 py-2 rounded-md text-white absolute top-0 right-0">Rare Find</button>
                )}

                <div className="px-3 py-2 bg-back-gray rounded-lg card-shadow">
                  <p className="text-txt px-2 mb-4">{data.desc}</p>
                  <div className="flex ietms-center justify-between gap-2">
                    <div>
                      <p className="text-txt">Singles: ${data.singles}</p>
                      <p className="text-txt">Doubles: ${data.doubles}</p>
                    </div>
                    <button className="bg-primary rounded-md text-white text-lg cursor-pointer px-3">Book now</button>
                  </div>
                </div>

            </div>
          ))}
        </div>

      </div>
  )
}

export const Requests = () => {
  return (
    <>
    <div className="my-12 p-2 sm:max-w-[85%] w-full mx-auto">

      <h2 className="text-secondary text-2xl font-semibold">you currently have 3 requests</h2>

      {/* Designing the card component */}
      <Card/>


      {/* Designing the last card component */}
      <CompletedCard/>
    </div>
    </>
  )
}
