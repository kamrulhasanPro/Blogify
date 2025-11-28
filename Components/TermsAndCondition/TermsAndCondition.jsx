"use client";

import Image from "next/image";
import React from "react";
import MyContainer from "../Share/MyContainer";

const TermsAndConditions = () => {
  return (
    <MyContainer>
      {/* RIGHT SIDE – TERMS TEXT */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Terms & Conditions
        </h1>

        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-primary">Blogify</span>. By
            using our website, you agree to follow these Terms & Conditions.
            Please read them carefully to understand your rights and
            responsibilities.
          </p>

          <h2 className="text-xl font-semibold">1. Using Our Website</h2>
          <p>
            You agree to use Blogify only for legal and positive purposes. Do
            not attempt to harm, disrupt, or misuse the website in any way.
          </p>

          <h2 className="text-xl font-semibold">2. Content Policy</h2>
          <p>
            All articles, images, and media on Blogify are protected. You may
            not copy, reuse, or republish our content without permission.
          </p>

          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p>
            You must ensure your submitted comments or content do not violate
            laws, copyrights, or contain harmful material.
          </p>

          <h2 className="text-xl font-semibold">4. Third-Party Links</h2>
          <p>
            Our website may include external links. Blogify is not responsible
            for the content or security of third-party sites.
          </p>

          <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
          <p>
            Blogify may update these Terms anytime. Continued use of the website
            means you accept the updated Terms & Conditions.
          </p>
        </div>
      </div>
    </MyContainer>
  );
};

export default TermsAndConditions;
