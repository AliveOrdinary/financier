import Image from "next/image";
import React from "react";

export const Features = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center w-full lg:px-20 gap-10  py-10 lg:py-20 bg-[url('/60-lines.png')] bg-repeat">
      <h1 className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-5/6 font-bold text-neutral-900 dark:text-neutral-100 ">
        Take control of your finances with Financier
      </h1>
      <div className="flex justify-center items-center flex-col md:mt-8 gap-10">
        <div className="flex flex-col lg:flex-row justify-center items-center  lg:w-4/6 xl:w-4/6">
          <div className="w-[300px] md:w-[400px] lg:w-[600px] py-6 lg:py-0">
            <Image
              src={"/assets/coins.jpg"}
              className="rounded-lg object-cover"
              alt="expenses"
              width={600}
              height={600}
            />
          </div>
          <div className="w-4/6 lg:px-20 text-base md:text-base xl:text-xl font-medium text-center text-neutral-800 dark:text-neutral-100 ">
            Our Expense Tracker feature allows you to easily record and
            categorize all your expenses in one place.
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row-reverse justify-center items-center   lg:w-4/6 xl:w-4/6">
          <div className="w-[300px] md:w-[400px] lg:w-[600px] py-6 lg:py-0">
            <Image
              src={"/assets/income.jpg"}
              className="rounded-lg object-cover"
              alt="income"
              width={600}
              height={600}
            />
          </div>
          <div className="w-4/6 lg:px-20 text-base md:text-base xl:text-xl font-medium text-center text-neutral-800 dark:text-neutral-100">
            Easily manage all your sources of income with our Income Manager
            feature. Record all your income and identify opportunities to
            generate more revenue.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center   lg:w-4/6  xl:w-4/6">
          <div className="w-[300px] md:w-[400px] lg:w-[600px] py-6 lg:py-0">
            <Image
              src={"/assets/analysis.jpg"}
              className="rounded-lg object-cover"
              alt="analysis"
              width={600}
              height={600}
            />
          </div>
          <div className="w-4/6 lg:px-20 text-base md:text-base xl:text-xl font-medium text-center text-neutral-800 dark:text-neutral-100">
            Get detailed financial reports and insights into your spending and
            income habits. Use these reports to make informed decisions and
            improve your financial situation.
          </div>
        </div>
      </div>
    </main>
  );
};
