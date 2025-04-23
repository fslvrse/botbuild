import React from "react";

function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    <div className="bot-card" onClick={clickEvent}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <div className="bot-stats">
        <span>❤️ {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>
      <p className="catchphrase">{bot.catchphrase}</p>
      {deleteBot && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteBot();
          }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
