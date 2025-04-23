import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBot, deleteBot }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-collection">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={() => releaseBot(bot)}
            deleteBot={() => deleteBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
