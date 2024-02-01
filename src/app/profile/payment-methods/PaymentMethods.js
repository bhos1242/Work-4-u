import React from "react";
import Profile from "../Profile";
import Image from "next/image";
import creditCard from "./images/credit-card.png";
import bankAccount from "./images/bank-account.png";

const PaymentMethods = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 md:flex-row">
      <div className="hidden w-full left-menu md:w-1/4 md:block">
        <Profile />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg md:p-8 md:w-3/4">
        <div className="mb-6 heading">
          <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
            Payment Methods
          </h1>
        </div>

        <div className="flex flex-col items-center text-lg text-gray-800 md:flex-row md:justify-between">
          <div className="mb-6 payment-method md:mb-0">
            <Image
              src={creditCard}
              alt="credit card"
              width={100}
              height={100}
            />
            <h2 className="mt-4 text-xl font-bold">Make Payments</h2>
            <p className="text-base text-gray-600">
              Once a task is completed, you can request payment from the Job
              Poster, who will then release it to your nominated account.
            </p>
          </div>

          <div className="payment-method">
            <Image
              src={bankAccount}
              alt="bank account"
              width={100}
              height={100}
            />
            <h2 className="mt-4 text-xl font-bold">Receive Payments</h2>
            <p className="text-base text-gray-600">
              To receive payments, you need to provide your payment and billing
              information.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-xl font-semibold text-gray-800">
            Billing Address
          </div>
          <p className="text-base text-gray-600">
            Add your billing address for secure transactions.
          </p>
          <div className="mt-4">
            <div className="font-semibold text-gray-800">Address</div>
            <input
              type="text"
              className="input-field"
              placeholder="1 O’Connell Street"
            />
          </div>
          <div className="mt-4">
            <div className="font-semibold text-gray-800">
              Can't find your address?
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Enter manually
            </a>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-xl font-semibold text-gray-800">
            Bank Account Details
          </div>
          <p className="text-base text-gray-600">
            Please provide your bank details to receive payments. Rest assured,
            we won't deduct any funds from your account.
          </p>
          <div className="mt-4">
            <div className="font-semibold text-gray-800">
              Account Holder Name
            </div>
            <input
              type="text"
              className="input-field"
              placeholder="Your Full Name"
            />
          </div>
          <div className="mt-4">
            <div className="font-semibold text-gray-800">Account Number</div>
            <input
              type="text"
              className="input-field"
              placeholder="Your Account Number"
            />
          </div>
          <div className="mt-6">
            <button className="btn btn-primary">Add Bank Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
