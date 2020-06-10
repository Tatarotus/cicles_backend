module.exports = {
  async index(request, response) {
    try {
      return response.json({ok: "We did it!"})
    } catch (err) {
      console.log(err);
    }
  },
};
