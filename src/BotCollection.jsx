import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} clickEvent={() => enlistBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
