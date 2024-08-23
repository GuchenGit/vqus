db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [
    { role: "root", db: "admin" }
  ]
});

db.createUser({
  user: process.env.MONGO_INITDB_WORKER_USERNAME,
  pwd: process.env.MONGO_INITDB_WORKER_PASSWORD,
  roles: [
    { role: "readWrite", db: process.env.MONGO_INITDB_DATABASE }
  ]
});