module.exports = async function (request, response) {
    const { pathname } = url.parse(request.url);
  
    try {
      const currentVisits = await db.get(pathname);
      await db.put(pathname, currentVisits + 1);
    } catch (error) {
      if (error.notFound) await db.put(pathname, 1);
    }
  
    send(response, 200, `This page has ${await db.get(pathname)} visits!`);
  }
