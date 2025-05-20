CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL
);


INSERT INTO users (firstname, lastname) VALUES ('Mario', 'Rossi');
INSERT INTO users (firstname, lastname) VALUES ('Luigi', 'Verdi');
INSERT INTO users (firstname, lastname) VALUES ('Giuseppe', 'Gialli');


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    userId INT REFERENCES users(id)
);

INSERT INTO posts (body, userId) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1);
INSERT INTO posts (body, userId) VALUES ('Nullam lacinia mollis feugiat. Donec sit amet iaculis ipsum. Duis at arcu id elit maximus placerat at eu ex. Mauris quis lacus sollicitudin,', 1);
INSERT INTO posts (body, userId) VALUES ('Sed ut purus sed velit imperdiet consectetur. Pellentesque eu velit vel ligula facilisis scelerisque a vitae sem. Quisque libero libero, tempor id nisl vel, tincidunt tempus urna.', 1);

INSERT INTO posts (body, userId) VALUES ('Sed finibus nibh ut sollicitudin cursus. Morbi et nibh viverra, porta magna ut, venenatis massa. Aenean a dictum mauris.', 2);
INSERT INTO posts (body, userId) VALUES ('Phasellus pellentesque volutpat justo et sodales. Praesent ut aliquet erat. ', 2);
INSERT INTO posts (body, userId) VALUES ('Fusce elementum non tellus ut placerat. Fusce eu blandit nunc, eu maximus augue. Maecenas vulputate mollis sem non imperdiet.', 2);

INSERT INTO posts (body, userId) VALUES ('Morbi accumsan turpis sed ligula consequat, ut euismod ligula tempus. Suspendisse quis ligula efficitur, volutpat ante tincidunt, vehicula elit.', 3);
INSERT INTO posts (body, userId) VALUES ('Morbi vel felis a est feugiat ullamcorper gravida non diam. Etiam lacinia gravida ipsum et pretium. Vivamus justo felis, venenatis nec pharetra vel, luctus nec sem. Sed non sem id ante fermentum tincidunt. ', 3);
INSERT INTO posts (body, userId) VALUES ('Nam molestie erat vitae ipsum cursus, sit amet vestibulum tellus egestas. Phasellus pharetra nisi nec tellus dignissim, eget scelerisque justo malesuada. Nullam faucibus imperdiet purus vitae facilisis.', 3);
INSERT INTO posts (body, userId) VALUES ('Sed at aliquam magna. Aenean tincidunt tincidunt hendrerit. In fringilla eros nec tortor ultrices, a fringilla felis pharetra.', 3);


