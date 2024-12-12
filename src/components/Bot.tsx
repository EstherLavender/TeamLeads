import React, { useState } from "react";

const mockUserData = {
  user1: { points: 50, rank: 1 },
  user2: { points: 30, rank: 2 },
};

const Bot = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [message, setMessage] = useState("");

  const startCommand = () => {
    setMessage("Welcome to the bot! Use /contribute to earn points.");
  };

  const contributeCommand = () => {
    setMessage("You have earned 10 points!");
    mockUserData.user1.points += 10;
  };

  const leaderboardCommand = () => {
    const sorted = Object.entries(mockUserData).sort((a, b) => b[1].points - a[1].points);
    setLeaderboard(sorted);
  };

  return (
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#333", borderRadius: "10px" }}>
      <h2>Community Bot</h2>
      <div>
        <button onClick={startCommand}>/start</button>
        <button onClick={contributeCommand} style={{ marginLeft: "10px" }}>/contribute</button>
        <button onClick={leaderboardCommand} style={{ marginLeft: "10px" }}>/leaderboard</button>
      </div>
      <p style={{ marginTop: "10px", color: "#fff" }}>{message}</p>
      {leaderboard.length > 0 && (
        <div>
          <h3>Leaderboard</h3>
          <ul>
            {leaderboard.map(([user, data], idx) => (
              <li key={idx}>
                {user}: {data.points} points (Rank: {data.rank})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bot;
