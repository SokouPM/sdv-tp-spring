INSERT INTO team (name, slogan)
VALUES ('PSG', 'Revons plus grand');
INSERT INTO team (name, slogan)
VALUES ('Real Madrid', 'Les galactiques');
INSERT INTO team (name, slogan)
VALUES ('Barcelone', 'La Macia');
INSERT INTO team (name, slogan)
VALUES ('Bayern', 'Les puissants en Allemagne');
INSERT INTO team (name, slogan)
VALUES ('Manchester United', 'Les red devils');

-- PSG Players
INSERT INTO player (name, number, position, team_id)
VALUES ('Neymar', 10, 'Attaquant', 1),
       ('Kylian Mbappé', 7, 'Attaquant', 1),
       ('Angel Di Maria', 11, 'Milieu de terrain', 1),
       ('Marco Verratti', 6, 'Milieu de terrain', 1),
       ('Presnel Kimpembe', 3, 'Défenseur', 1),
       ('Achraf Hakimi', 2, 'Défenseur', 1),
       ('Georginio Wijnaldum', 5, 'Milieu de terrain', 1),
       ('Mauro Icardi', 9, 'Attaquant', 1),
       ('Marquinhos', 5, 'Défenseur', 1),
       ('Keylor Navas', 1, 'Gardien de but', 1),
       ('Idrissa Gueye', 27, 'Milieu de terrain', 1);


-- Real Madrid Players
INSERT INTO player (name, number, position, team_id)
VALUES ('Karim Benzema', 9, 'Attaquant', 2),
       ('Eden Hazard', 7, 'Milieu de terrain', 2),
       ('Luka Modric', 10, 'Milieu de terrain', 2),
       ('Sergio Ramos', 4, 'Défenseur', 2),
       ('Toni Kroos', 8, 'Milieu de terrain', 2),
       ('Vinicius Junior', 20, 'Attaquant', 2),
       ('Casemiro', 14, 'Milieu de terrain', 2),
       ('David Alaba', 4, 'Défenseur', 2),
       ('Ferland Mendy', 23, 'Défenseur', 2),
       ('Thibaut Courtois', 1, 'Gardien de but', 2),
       ('Rodrygo', 16, 'Attaquant', 2);


-- Barcelone Players
INSERT INTO player (name, number, position, team_id)
VALUES ('Lionel Messi', 10, 'Attaquant', 3),
       ('Antoine Griezmann', 7, 'Attaquant', 3),
       ('Frenkie de Jong', 21, 'Milieu de terrain', 3),
       ('Gerard Piqué', 3, 'Défenseur', 3),
       ('Jordi Alba', 18, 'Défenseur', 3),
       ('Sergio Busquets', 5, 'Milieu de terrain', 3),
       ('Ansu Fati', 22, 'Attaquant', 3),
       ('Pedri', 16, 'Milieu de terrain', 3),
       ('Ronald Araujo', 4, 'Défenseur', 3),
       ('Marc-André ter Stegen', 1, 'Gardien de but', 3),
       ('Miralem Pjanic', 8, 'Milieu de terrain', 3);


-- Bayern Players
INSERT INTO player (name, number, position, team_id)
VALUES ('Robert Lewandowski', 9, 'Attaquant', 4),
       ('Thomas Müller', 25, 'Milieu de terrain', 4),
       ('Joshua Kimmich', 6, 'Milieu de terrain', 4),
       ('David Alaba', 27, 'Défenseur', 4),
       ('Manuel Neuer', 1, 'Gardien de but', 4),
       ('Leroy Sané', 10, 'Attaquant', 4),
       ('Leon Goretzka', 18, 'Milieu de terrain', 4),
       ('Serge Gnabry', 7, 'Attaquant', 4),
       ('Niklas Süle', 4, 'Défenseur', 4),
       ('Lucas Hernandez', 21, 'Défenseur', 4),
       ('Kingsley Coman', 29, 'Attaquant', 4);

-- Manchester United Players
INSERT INTO player (name, number, position, team_id)
VALUES ('Anthony Martial', 9, 'Attaquant', 5),
       ('Fred', 17, 'Milieu de terrain', 5),
       ('Jadon Sancho', 25, 'Attaquant', 5),
       ('Raphael Varane', 19, 'Défenseur', 5),
       ('Donny van de Beek', 34, 'Milieu de terrain', 5),
       ('Dean Henderson', 26, 'Gardien de but', 5),
       ('Eric Bailly', 3, 'Défenseur', 5),
       ('Nemanja Matic', 31, 'Milieu de terrain', 5),
       ('Victor Lindelof', 2, 'Défenseur', 5),
       ('Edinson Cavani', 7, 'Attaquant', 5),
       ('Juan Mata', 8, 'Milieu de terrain', 5);
