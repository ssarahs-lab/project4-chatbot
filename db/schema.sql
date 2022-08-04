
DROP TABLE IF EXISTS messageboard;


CREATE TABLE messageboard    (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    contact_email VARCHAR(255),
    contact_number VARCHAR(255),
    message_sent VARCHAR(255),
    last_login TIMESTAMP, 
    account_created TIMESTAMP NOT NULL DEFAULT NOW()
);


