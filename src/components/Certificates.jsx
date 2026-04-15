import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const certificates = [
  {
    name: "Data Analytics Essentials – Cisco",
    image: "/certificates/_certificate_data analytics.cisco.png",
    link: "/certificates_pdf/_certificate_data analytics.cisco.pdf",
  },
  {
    name: "CCNA: Introduction to Networks",
    image: "/certificates/CCNA-_Introduction_to_Networks_certificate.png",
    link: "/certificates_pdf/CCNA-_Introduction_to_Networks_certificate.pdf",
  },
  {
    name: "Python Essentials 1 – Cisco",
    image: "/certificates/Python_Essentials_1_certificate.png",
    link: "/certificates_pdf/Python_Essentials_1_certificate.pdf",
  }, 
  {
    name: "Networking Devices and Initial Configuration",
    image: "/certificates/Networking_Devices_and_Initial_Configuration_certificate.png",
    link: "/certificates_pdf/Networking_Devices_and_Initial_Configuration_certificate.pdf",
  },
  {
    name: "AWS Cloud Foundations",
    image: "/certificates/AWS_Cloud_Foundations.png",
    link: "/certificates_pdf/AWS_Cloud_Foundations.pdf",
  },
  {
    name: "Certified Blue Team Practitioner (CBTP)",
    image: "/certificates/Sakshi--CertifiedBlueTeamPractitioner(CBTP).png",
    link: "/certificates_pdf/Sakshi--CertifiedBlueTeamPractitioner(CBTP).pdf",
  },
  {
    name: "Cybersecurity Academy Onboarding",
    image: "/certificates/Cybersecurity_Academy_Onboarding_Certificate.png",
    link: "/certificates_pdf/Cybersecurity_Academy_Onboarding_Certificate.pdf",
  },
  {
    name: "Cybersecurity Foundations",
    image: "/certificates/Cybersecurity_Foundation_Student_Certificate.png",
    link: "/certificates_pdf/Cybersecurity_Foundation_Student_Certificate.pdf",
  },
  {
    name: "Cloud Security Fundamentals",
    image: "/certificates/Cloud_Security_Fundamentals_Student_Certificate.png",
    link: "/certificates_pdf/Cloud_Security_Fundamentals_Student_Certificate.pdf",
  },
  {
    name: "Cloud Security Automation",
    image: "/certificates/_Cloud_Security_Automation_Student_Certificate.png",
    link: "/certificates_pdf/_Cloud_Security_Automation_Student_Certificate.pdf",
  },
  {
    name: "Network Security Fundamentals",
    image: "/certificates/Network_Security_Fundamentals_Student_Certificate_page-0001.png",
    link: "/certificates_pdf/Network_Security_Fundamentals_Student_Certificate.pdf",
  },
  {
    name: "Security Operations Fundamentals",
    image: "/certificates/Security_Operations_Fundamentals_Student_Certificate.png",
    link: "/certificates_pdf/Security_Operations_Fundamentals_Student_Certificate.pdf",
  },
  {
    name: "Security Operations Configuration",
    image: "/certificates/Security_Operations_Configuration_Certificate.png",
    link: "/certificates_pdf/Security_Operations_Configuration_Certificate.pdf",
  },
  {
    name: "Cybersecurity Internship",
    image: "/certificates/cybersecurityINtenrn.png",
    link: "/certificates_pdf/cybersecurityINtenrn.pdf",
  },
  {
    name: "AI Certificate",
    image: "/certificates/AI CERTIFICATE.png",
    link: "/certificates_pdf/AI CERTIFICATE.pdf",
  },
  {
    name: "C Programming",
    image: "/certificates/c-programming.png",
    link: "/certificates_pdf/c-programming.pdf",
  },
  {
    name: "SQL Certificate",
    image: "/certificates/SQL_certificate_page-0001.png",
    link: "/certificates_pdf/SQL_certificate.pdf",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-32 bg-primary-bg">
      <div className="container mx-auto px-6">
        <SectionTitle>Certificates</SectionTitle>

        <div className="overflow-hidden mt-16">
          <div className="flex gap-10 animate-scroll w-max">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="min-w-[260px] bg-secondary-bg rounded-lg p-4 flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-40 object-contain mb-4"
                />

                <p className="text-text-primary text-center text-sm font-medium">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-secondary-bg p-6 rounded-lg max-w-3xl w-full relative">

            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full rounded-md mb-4"
            />

            <p className="text-center text-text-primary mb-4">
              {selectedCert.name}
            </p>

            <div className="flex justify-center">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-accent-1 text-black font-semibold rounded hover:scale-105 transition"
              >
                View Full Certificate
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;