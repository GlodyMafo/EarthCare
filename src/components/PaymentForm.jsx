import React from 'react';


const PaymentForm = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10 pt-4">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
     
        <div className="p-2 ">
          <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type1"
                defaultChecked
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
                alt="Type 1"
              />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type2"
              />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                className="h-8 ml-3"
                alt="Type 2"
              />
            </label>
          </div>
        </div>

        <div className=" w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Choisir un projet</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
                <option value="01">Projet A</option>
                <option value="02">Projet B</option>
                <option value="03">Projet C</option>
              </select>
            </div>
          </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="John Smith"
              type="text"
            />
          </div>
        </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
        </div>
        <div className="mb-1 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors cursor-pointer">
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2020">2030</option>
              <option value="2021">2031</option>
              <option value="2022">2032</option>
              <option value="2023">2033</option>
            </select>
          </div>
        </div>
        <div className="mb-1">
          <label className="font-bold text-sm mb-2 ml-1">Security code</label>
          <div>
            <input
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-secondary transition-colors"
              placeholder="000"
              type="text"
            />
          </div>
        </div>
        <div>
          <button className="block w-full max-w-xs mx-auto bg-primary hover:bg-secondary focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
