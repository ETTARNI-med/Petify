import React from "react";

export default function TermsOfSale() {
  return (
    <div className="flex flex-col justify-center items-center p-8 m-8">
      <h1 className="font-tourney align-top m-8 text-5xl flex justify-center	">
      TERMS OF SALE
      </h1>

      <h1 className="mt-6 font-Raleway text-xl">Last Updated: 30/11/2023</h1>

      <p className="mt-6">
        Welcome to Petify, your trusted source for all things pet-related.
        Before making a purchase, please take a moment to review our Terms of
        Sale. These terms outline the conditions under which you can make
        purchases on our website, and they govern your rights and
        responsibilities as a customer.
      </p>

      <h1 className="mt-6 font-Raleway text-xl">Placing an Order</h1>

      <p className="mt-6">
        By placing an order on the Petify website, you agree to the following:
      </p>

      <ol className="mt-6">
        <li>
          <b>1.Order Acceptance:</b> Your order is an offer to purchase a
          product or service, which is subject to our acceptance. We reserve the
          right to refuse or cancel any order for any reason, including
          limitations on quantities available for purchase.
        </li>
        <li>
          <b>2.Pricing: Prices</b> for our products are subject to change
          without notice. We do our best to ensure accurate pricing, but errors
          may occur. In the event of a pricing error, we will contact you before
          processing the order.
        </li>
        <li>
          <b>3.Payment: </b> We accept various payment methods. By providing
          payment information, you represent and warrant that you have the legal
          right to use any payment method used in connection with any purchase.
        </li>
      </ol>
      <h1 className="mt-6 font-Raleway text-xl">Shipping and Delivery</h1>
      <ol className="mt-6">
        <li>
          <b>1.Delivery Times:</b> We provide estimated delivery times based on
          the shipping method you select. Please note that these times are
          estimates and may vary depending on your location and other factors.
        </li>
        <li>
          <b>2.Risk of Loss:</b> The risk of loss and title for items purchased
          by you pass to you upon our delivery to the carrier.
        </li>
      </ol>
      <h1 className="mt-6 font-Raleway text-xl">Returns and Refunds</h1>
      <p className="mt-6">
        Our Return Policy governs all returns and refunds. Please review our
        Return Policy below for details on how to initiate a return, the
        eligibility of products for return, and our refund process.
      </p>
      <h1 className="mt-6 font-Raleway text-xl">
        Warranty and Product Information
      </h1>
      <p className="mt-6">
        Many products available on our website are covered by the manufacturer's
        warranty. Please refer to the product's warranty information for
        details. We do not make any representations or warranties regarding the
        products beyond what is provided by the manufacturer.
      </p>

      <h1 className="mt-6 font-Raleway text-xl">Limitation of Liability</h1>
      <p className="mt-6">
        To the maximum extent permitted by law, Petify is not liable for any
        direct, indirect, punitive, incidental, special, or consequential
        damages that may result from your use of our products or services.
      </p>
      <h1 className="mt-6 font-Raleway text-xl">Changes to Terms of Sale</h1>
      <p className="mt-6">
        We may update these Terms of Sale at any time. Your continued use of our
        website after such changes indicates your acceptance of the updated
        terms.
      </p>
    </div>
  );
}
