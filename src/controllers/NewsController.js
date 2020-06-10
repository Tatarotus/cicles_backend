module.exports = {
  async create(request, response) {
    try {
      const { passwd } = request.body;
      if (passwd === "pacoca123") {
        const { date, description } = request.body;
        const news = await connection("news").insert({
          date,
          description
        });
        return response.status(204).send();
      }
      return response.status(403).send();
    } catch (err) {
      console.log(err);
    }
  },
  async index(request, response) {
    try {
      const news = await connection("news").select("*");
      return response.json(news);
    } catch (err) {
      console.log(err);
    }
  }
};
