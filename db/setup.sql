CREATE TABLE PLAYER(
  ID VARCHAR(96) PRIMARY KEY,
  NAME VARCHAR(100)
  DATE_CREATED DATE
);

CREATE TABLE GAME(
  ID SERIAL PRIMARY KEY,
  CREATOR VARCHAR(96) FOREIGN KEY REFERENCES PLAYER (ID),
  CORRECT_WORDS VARCHAR(100)[],
  SKIPPED_WORDS VARCHAR(100)[]
);

CREATE TABLE TEAM(
  ID SERIAL PRIMARY KEY,
  NAME VARCHAR(255),
  DATE_CREATED DATE,
  USER VARCHAR(96) FOREIGN KEY REFERENCES PLAYER (ID)
);

CREATE TABLE WORDS(
  ID SERIAL PRIMARY KEY,
  WORD VARCHAR(100) NOT NULL,
  LANGUAGE VARCHAR(2) NOT NULL,
  CONSTRAINT UNIQE_LANG_WORD UNIQE (WORD, LANGUAGE)
);
