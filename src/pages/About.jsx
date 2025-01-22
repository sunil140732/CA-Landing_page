import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      {/* About Page Header */}
      <h1 className="text-4xl font-extrabold text-center my-5">About Us</h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        We connect individuals with trusted Chartered Accountants for all their financial needs.
      </p>

      {/* About Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our mission is to provide a reliable platform for finding verified and skilled Chartered Accountants who offer expert
          advice, consultation, and financial services tailored to your needs. We strive to make financial management easier for
          individuals and businesses alike.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Integrity: We ensure all the accountants listed are trusted and reliable professionals.</li>
          <li>Transparency: We provide clear and competitive pricing without hidden fees.</li>
          <li>Customer-Centric: We prioritize the needs of our users and continuously improve our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600">
          With our extensive database of verified Chartered Accountants, we help you make informed decisions by providing the
          right financial experts at the right price. Whether you're looking for tax advice, bookkeeping, or financial planning,
          we ensure a seamless connection with experts who can guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;

