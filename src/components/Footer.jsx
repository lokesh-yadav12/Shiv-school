import React from "react";

const Footer = () => (
  <footer className="bg-[#0f2226] text-gray-200 mt-0 px-6">
    <div className="container mx-auto py-8 grid md:grid-cols-3 gap-6 text-center">
      <div>
        <h3 className="font-bold text-lg">Shiv School</h3>
        <p className="text-sm text-gray-300">Nurturing learners since 2005.</p>
        <p className="text-sm text-gray-300">Lokesh Kumar</p>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <p className="text-sm text-gray-300">
          123 Lajpath Nagar, Alwar, Rajasthan
        </p>
        <p className="text-sm text-gray-300">Phone: +91 9166353078</p>
      </div>
      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Admissions</li>
          <li>Gallery</li>
          <li>Noticeboard</li>
        </ul>
      </div>
    </div>
    <div className="text-center py-3 text-sm bg-black/20">
      © {new Date().getFullYear()} Shiv School. All rights reserved.
    </div>
  </footer>
);

export default Footer;
