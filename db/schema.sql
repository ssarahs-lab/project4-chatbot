DROP TABLE IF EXISTS chat_logs;
DROP TABLE IF EXISTS users;


CREATE TABLE users    (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    last_login TIMESTAMP, 
    account_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE chat_logs(

    chat_id SERIAL PRIMARY KEY,
    chat_content VARCHAR(255),
    date_started TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id)
);
