"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import Loading from "@/app/components/Loading/Loading";

// Dynamic imports for Leaflet map
const DynamicMap = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-3xl mx-auto py-8 px-4 ${className}`}>{children}</div>
  );
};

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://admin-dash-oil-trade.onrender.com/api/v1/contact");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Контактные данные</h1>

      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact._id} className="mb-8">
            <p className="text-lg">
              <strong></strong> {contact.name}
            </p>
            <p className="text-lg break-words">
              <strong></strong> {contact.description}
            </p>
          </div>
        ))
      ) : (
        <Loading/>
      )}

      {isMounted && (
        <div className="w-full h-96 mt-6">
          <DynamicMap
            center={[41.2995, 69.2401]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[41.2995, 69.2401]}>
              <Popup>Tashkent, Uzbekistan</Popup>
            </Marker>
          </DynamicMap>
        </div>
      )}

      {/* Изображения отображаются под картой */}
      {contacts.length > 0 && (
        <div>
          {contacts.map((contact) =>
            contact.images.length > 0 ? (
              contact.images.map((image, index) => (
                <div key={index} className="mt-4">
                  <Image
                    src={`http://localhost:5000/${image}`} // используем переменную image
                    alt={`Image of ${contact.name}`}
                    width={400}
                    height={250}
                    className="rounded-lg mx-auto"
                  />
                </div>
              ))
            ) : (
              <p key={contact._id}>No images available for this contact.</p>
            )
          )}
        </div>
      )}
    </Container>
  );
};

export default Contact;
