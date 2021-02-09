export async function getRepo() {
  const res = await fetch(
    "https://api.github.com/repos/puigandrew1/andrewpuig.dev",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const json = await res.json();
  return json;
}

export async function getRepoContents() {
  const res = await fetch(
    "https://api.github.com/repos/puigandrew1/andrewpuig.dev/contents",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const json = await res.json();
  return json;
}

export async function getFile(file) {
  const res = await fetch(
    `https://api.github.com/repos/puigandrew1/andrewpuig.dev/contents/${file}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const json = await res.json();
  return json;
}
