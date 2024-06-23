import React from "react";
import "../cards/cards.css";
import {
  IconFolders,
  IconAddressBook,
  IconMail,
  IconTrendingUp,
} from "@tabler/icons-react";
import Productsidebar from "../ProductSide/Productsidebar";

const Card = () => {
  const cards = [
    { name: "Document", title: "146.000", icon: IconFolders },
    { name: "Contact", title: "1400", icon: IconAddressBook },
    { name: "Email", title: "150.700", icon: IconMail },
  ];

  return (
    <div>
      <div className="Card">
        <div className="card-container">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div className="card" key={index}>
                <div className="container">
                  <h4>
                    <b>{card.name}</b>
                    <IconComponent className="icon" />
                  </h4>
                  <p style={{ fontWeight: "bold" }}>{card.title}</p>
                  <div
                    style={{ display: "flex", alignItems: "center", color: "green" }}
                  >
                    <IconTrendingUp />
                    <span style={{ marginLeft: "4px", marginRight: "4px" }}>17%</span>
                    <span style={{ color: "gray", fontWeight: "bold" }}>
                      since last week
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
