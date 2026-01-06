async function loadGoogleFont(
  font: string,
  text: string,
  weight: number,
  slant: number,
  width: number,
  grade: number,
  roundness: number
): Promise<ArrayBuffer> {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) throw new Error("Failed to download dynamic font");

  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string; css: string }>
> {
  const fontsConfig = [
    {
      name: "Google Sans Flex",
      font: "Google Sans Flex",
      weight: 800,
      style: "normal",
      slant: 0,
      width: 100,
      grade: 0,
      roundness: 0,
    },
    {
      name: "Google Sans Flex",
      font: "Google Sans Flex",
      weight: 900,
      style: "bold",
      slant: 0,
      width: 100,
      grade: 0,
      roundness: 0,
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style, slant, width, grade, roundness }) => {
      const data = await loadGoogleFont(font, text, weight, slant, width, grade, roundness);
      const uniquifier = Math.random().toString(36).substring(2, 8);
      const css = `.google-sans-flex-${uniquifier} {
  font-family: "Google Sans Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: ${weight};
  font-style: ${style};
  font-variation-settings:
    "slnt" ${slant},
    "wdth" ${width},
    "GRAD" ${grade},
    "ROND" ${roundness};
}`;
      return { name, data, weight, style, css };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
