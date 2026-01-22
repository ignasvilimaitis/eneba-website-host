const Database = require("better-sqlite3");
const db = new Database("game.db");

const randomLikes = () => Math.floor(Math.random() * 1200) + 50;



// Create table
db.exec(`
  CREATE TABLE IF NOT EXISTS game (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price_eur REAL NOT NULL,
    image_url TEXT NOT NULL,
    discount INTEGER DEFAULT 0,
    platform TEXT NOT NULL,
    region TEXT NOT NULL,
    likes INTEGER DEFAULT 0
  );
`);

// Seed if empty
const count = db.prepare("SELECT COUNT(*) AS c FROM game").get().c;
if (count === 0) {
  const insert = db.prepare(`
    INSERT INTO game (title, price_eur, image_url, discount, platform, region, likes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);



// Obviously, in a real app, data would come from elsewhere like a CMS or external API
// Used CHATGPT to generate realistic sample data

insert.run("FIFA 23 PC GLOBAL", 34.99, "/images/fifa23.jpg", 5, "PC", "GLOBAL", randomLikes());
insert.run("FIFA 23 PC EU", 29.99, "/images/fifa23.jpg", 15, "PC", "EU", randomLikes());
insert.run("FIFA 23 PC NA", 27.99, "/images/fifa23.jpg", 20, "PC", "NA", randomLikes());
insert.run("FIFA 23 PC ASIA", 32.99, "/images/fifa23.jpg", 10, "PC", "ASIA", randomLikes());
insert.run("FIFA 23 PC UK", 31.49, "/images/fifa23.jpg", 12, "PC", "UK", randomLikes());

insert.run("FIFA 23 PS GLOBAL", 39.99, "/images/fifa23.jpg", 0, "PS", "GLOBAL", randomLikes());
insert.run("FIFA 23 PS EU", 35.99, "/images/fifa23.jpg", 10, "PS", "EU", randomLikes());
insert.run("FIFA 23 PS NA", 33.49, "/images/fifa23.jpg", 18, "PS", "NA", randomLikes());
insert.run("FIFA 23 PS ASIA", 36.99, "/images/fifa23.jpg", 8, "PS", "ASIA", randomLikes());
insert.run("FIFA 23 PS LATAM", 34.99, "/images/fifa23.jpg", 15, "PS", "LATAM", randomLikes());

insert.run("FIFA 23 XBOX GLOBAL", 37.99, "/images/fifa23.jpg", 5, "XBOX", "GLOBAL", randomLikes());
insert.run("FIFA 23 XBOX EU", 32.99, "/images/fifa23.jpg", 20, "XBOX", "EU", randomLikes());
insert.run("FIFA 23 XBOX NA", 30.99, "/images/fifa23.jpg", 25, "XBOX", "NA", randomLikes());
insert.run("FIFA 23 XBOX UK", 33.99, "/images/fifa23.jpg", 15, "XBOX", "UK", randomLikes());
insert.run("FIFA 23 XBOX ASIA", 31.99, "/images/fifa23.jpg", 22, "XBOX", "ASIA", randomLikes());

insert.run("FIFA 23 NINTENDO GLOBAL", 36.99, "/images/fifa23_nintendo.jpg", 10, "Nintendo", "GLOBAL", randomLikes());
insert.run("FIFA 23 NINTENDO EU", 34.49, "/images/fifa23_nintendo.jpg", 15, "Nintendo", "EU", randomLikes());
insert.run("FIFA 23 NINTENDO NA", 33.99, "/images/fifa23_nintendo.jpg", 18, "Nintendo", "NA", randomLikes());
insert.run("FIFA 23 NINTENDO UK", 35.99, "/images/fifa23_nintendo.jpg", 12, "Nintendo", "UK", randomLikes());
insert.run("FIFA 23 NINTENDO LATAM", 32.49, "/images/fifa23_nintendo.jpg", 25, "Nintendo", "LATAM", randomLikes());

insert.run("Red Dead Redemption 2 PC GLOBAL", 49.99, "/images/rdr2.jpg", 0, "PC", "GLOBAL", randomLikes());
insert.run("Red Dead Redemption 2 PC EU", 39.99, "/images/rdr2.jpg", 20, "PC", "EU", randomLikes());
insert.run("Red Dead Redemption 2 PC NA", 37.99, "/images/rdr2.jpg", 25, "PC", "NA", randomLikes());
insert.run("Red Dead Redemption 2 PC UK", 41.99, "/images/rdr2.jpg", 15, "PC", "UK", randomLikes());
insert.run("Red Dead Redemption 2 PC ASIA", 36.99, "/images/rdr2.jpg", 30, "PC", "ASIA", randomLikes());

insert.run("Red Dead Redemption 2 PS GLOBAL", 59.99, "/images/rdr2.jpg", 0, "PS", "GLOBAL", randomLikes());
insert.run("Red Dead Redemption 2 PS EU", 44.99, "/images/rdr2.jpg", 25, "PS", "EU", randomLikes());
insert.run("Red Dead Redemption 2 PS NA", 42.49, "/images/rdr2.jpg", 30, "PS", "NA", randomLikes());
insert.run("Red Dead Redemption 2 PS UK", 46.99, "/images/rdr2.jpg", 20, "PS", "UK", randomLikes());
insert.run("Red Dead Redemption 2 PS LATAM", 43.99, "/images/rdr2.jpg", 27, "PS", "LATAM", randomLikes());

insert.run("Red Dead Redemption 2 XBOX GLOBAL", 54.99, "/images/rdr2_xbox.jpg", 5, "XBOX", "GLOBAL", randomLikes());
insert.run("Red Dead Redemption 2 XBOX EU", 41.99, "/images/rdr2_xbox.jpg", 30, "XBOX", "EU", randomLikes());
insert.run("Red Dead Redemption 2 XBOX NA", 39.99, "/images/rdr2_xbox.jpg", 35, "XBOX", "NA", randomLikes());
insert.run("Red Dead Redemption 2 XBOX UK", 44.49, "/images/rdr2_xbox.jpg", 22, "XBOX", "UK", randomLikes());
insert.run("Red Dead Redemption 2 XBOX ASIA", 38.99, "/images/rdr2_xbox.jpg", 40, "XBOX", "ASIA", randomLikes());

insert.run("Split Fiction PC GLOBAL", 14.99, "/images/split_fiction.jpg", 5, "PC", "GLOBAL", randomLikes());
insert.run("Split Fiction PC EU", 12.99, "/images/split_fiction.jpg", 15, "PC", "EU", randomLikes());
insert.run("Split Fiction PC NA", 11.99, "/images/split_fiction.jpg", 20, "PC", "NA", randomLikes());
insert.run("Split Fiction PC UK", 13.49, "/images/split_fiction.jpg", 10, "PC", "UK", randomLikes());
insert.run("Split Fiction PC ASIA", 10.99, "/images/split_fiction.jpg", 30, "PC", "ASIA", randomLikes());

insert.run("Split Fiction PS GLOBAL", 19.99, "/images/split_fiction.jpg", 0, "PS", "GLOBAL", randomLikes());
insert.run("Split Fiction PS EU", 16.99, "/images/split_fiction.jpg", 15, "PS", "EU", randomLikes());
insert.run("Split Fiction PS NA", 15.49, "/images/split_fiction.jpg", 22, "PS", "NA", randomLikes());
insert.run("Split Fiction PS UK", 17.99, "/images/split_fiction.jpg", 10, "PS", "UK", randomLikes());
insert.run("Split Fiction PS LATAM", 14.99, "/images/split_fiction.jpg", 25, "PS", "LATAM", randomLikes());

insert.run("Split Fiction XBOX GLOBAL", 18.99, "/images/split_fiction.jpg", 5, "XBOX", "GLOBAL", randomLikes());
insert.run("Split Fiction XBOX EU", 15.99, "/images/split_fiction.jpg", 20, "XBOX", "EU", randomLikes());
insert.run("Split Fiction XBOX NA", 14.49, "/images/split_fiction.jpg", 28, "XBOX", "NA", randomLikes());
insert.run("Split Fiction XBOX UK", 16.49, "/images/split_fiction.jpg", 15, "XBOX", "UK", randomLikes());
insert.run("Split Fiction XBOX ASIA", 13.99, "/images/split_fiction.jpg", 35, "XBOX", "ASIA", randomLikes());

insert.run("Split Fiction NINTENDO GLOBAL", 17.99, "/images/split_fiction_nintendo.jpg", 10, "Nintendo", "GLOBAL", randomLikes());
insert.run("Split Fiction NINTENDO EU", 16.49, "/images/split_fiction_nintendo.jpg", 15, "Nintendo", "EU", randomLikes());
insert.run("Split Fiction NINTENDO NA", 15.99, "/images/split_fiction_nintendo.jpg", 20, "Nintendo", "NA", randomLikes());
insert.run("Split Fiction NINTENDO UK", 16.99, "/images/split_fiction_nintendo.jpg", 12, "Nintendo", "UK", randomLikes());
insert.run("Split Fiction NINTENDO LATAM", 14.49, "/images/split_fiction_nintendo.jpg", 30, "Nintendo", "LATAM", randomLikes());



}

module.exports = db;
