import React from "react";

export const FaqSection = () => {
  return (
    <main className="flex flex-col justify-center items-center w-5/6 lg:4/6 py-10 lg:py-20 xl:py-36 gap-8 xl:gap-16">
      <h1 className="uppercase text-2xl font-semibold lg:text-4xl">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-left gap-2">
          <h1 className="font-semibold  text-base">
            How secure is my financial data?
          </h1>
          <p>
            Your financial data’s security is our top priority. We employ
            cutting-edge encryption techniques to ensure your information
            remains confidential.
          </p>
        </div>
        <div className="flex flex-col justify-center items-left gap-2">
          <h1 className="font-semibold  text-base">
            Can I import financial data from my bank?
          </h1>
          <p>
            Absolutely! Financier has an effortless importing feature that
            allows you to connect multiple bank accounts and import your
            financial data.
          </p>
        </div>
      </div>
    </main>
  );
};
