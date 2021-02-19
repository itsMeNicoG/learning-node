//connecting to sqlite database

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./users.db");

const createTable = () => {
  db.run("create table users(username text, id integer primary key)", (err) => {
    if (err) return console.error(`Error while creating table: ${err.message}`);
    console.log("Table users has been created successfully");
  });
};

const showUsers = () => {
  db.all("select * from users", (err, rows) => {
    if (err)
      return console.error(
        `Error while getting user list from database: ${err.message}`
      );
    if (rows.length === 0) return console.error("No users to show yet!");
    console.log(rows);
  });
};

const insertUser = (user) => {
  db.run(
    `insert into users(username, id) values("${user}", NULL)`,
    function (err) {
      if (err)
        return console.error(`Error while inserting value "${user}": ${err}`);
      console.log(`User "${user}" has been inserted with id = ${this.lastID}`);
      showUsers();
    }
  );
};

const removeUser = (user) => {
  db.run(`delete from users where username = "${user}"`, (err) => {
    if (err) return console.error(`Error while removing: ${err.message}`);
    console.log(`User ${user} has been successfully removed.`);
    showUsers();
  });
};

const main = () => {
  switch (process.argv[2]) {
    case "create":
      createTable();
      break;
    case "add":
      insertUser(process.argv[3]);
      break;
    case "remove":
      removeUser(process.argv[3]);
      break;
    case "show":
      showUsers();
      break;
    default:
      console.log(
        "You must provide the action to be completed (create/show/add/remove)."
      );
      break;
  }
};

main();
