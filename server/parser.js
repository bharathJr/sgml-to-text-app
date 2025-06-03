
function parseSGML(content) {
  const topics = {};
  const regex = /<section[^>]*>\s*<title>(.*?)<\/title>([\s\S]*?)<\/section>/gi;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const title = match[1].trim();
    const body = match[2].replace(/<[^>]*>/g, '').trim();
    topics[title] = body;
  }

  return topics;
}

module.exports = { parseSGML };
