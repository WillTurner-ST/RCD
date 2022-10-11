const charController = require("../controllers/char.controller");

module.exports = (app) => {
    //create
  app.post("/api/char", charController.createChar);
    //read
  app.get("/api/char", charController.getAllChars);
  app.get("/api/char/:id", charController.getOneChar);
    //update
  app.put("/api/char/:id", charController.updateChar);
    //delete
  app.delete("/api/char/:id", charController.deleteChar);
};