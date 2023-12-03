CREATE TABLE team (
    id IDENTITY NOT NULL PRIMARY KEY,
    name VARCHAR(200),
    slogan VARCHAR(500)
);

CREATE TABLE player (
    id IDENTITY NOT NULL PRIMARY KEY,
    name VARCHAR(200),
    number INT,
    position VARCHAR(200),
    team_id BIGINT,
    FOREIGN KEY (team_id) REFERENCES team(id) ON DELETE CASCADE
);