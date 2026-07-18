import data from "../resumeData.js";

const req = (c, m) => {
  if (!c) {
    console.error("FAIL:", m);
    process.exit(1);
  }
};

req(data.name && data.title, "name/title");
req(Array.isArray(data.taglines) && data.taglines.length, "taglines");
req(Array.isArray(data.about) && data.about.length >= 2, "about paragraphs");

req(Array.isArray(data.projects) && data.projects.length === 6, "six projects");
data.projects.forEach((p) =>
  req(
    p.id != null &&
      p.name &&
      p.pitch &&
      p.role &&
      p.logoKey &&
      Array.isArray(p.tags) &&
      Array.isArray(p.bullets) &&
      typeof p.links === "object" &&
      p.links !== null,
    `project ${p.name}`,
  ),
);

req(Array.isArray(data.services) && data.services.length === 3, "three services");

req(
  Array.isArray(data.skills) &&
    data.skills.length > 0 &&
    data.skills.every((g) => g.label && Array.isArray(g.items) && g.items.length),
  "grouped skills",
);

req(data.social?.email && data.social?.github && data.social?.linkedin, "social");

console.log("resumeData OK");
