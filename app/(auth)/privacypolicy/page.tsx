export const metadata = {
  title: "Privacy Policy - Pionir Inovasi Digital",
  description: "Learn how we collect, use, and protect your personal information.",
};

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </div>

      <div className="space-y-6">
        <p>
          At <strong>Pionir Inovasi Digital</strong>, protecting your privacy is our
          priority. This policy explains how we collect, use, and protect your
          personal information.
        </p>

        <h2 className="text-2xl font-semibold">Information Collection</h2>
        <p>
          We collect personal information such as your name, email address, and
          phone number when you interact with our services, such as signing up
          for an account or contacting support.
        </p>

        <h2 className="text-2xl font-semibold">Use of Information</h2>
        <p>
          The information we collect is used to provide and improve our
          services, process transactions, and communicate with you regarding
          updates or promotions.
        </p>

        <h2 className="text-2xl font-semibold">Protection of Information</h2>
        <p>
          We implement security measures to protect your personal data from
          unauthorized access, alteration, or disclosure. However, no method of
          transmission over the internet is completely secure.
        </p>

        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold">Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          communicated on this page, so we encourage you to review it
          regularly.
        </p>

        <div className="mt-6 text-center">
          <Link
            className="text-sm text-blue-600 underline hover:no-underline"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
