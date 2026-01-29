const anilist_url = "https://graphql.anilist.co";
export type Anime = {
  id: number;
  title: {
    english: string | null;
    romaji: string;
  };
  description: string | null;
  genres: string[];
  episodes: number | null;
  bannerImage: string | null;
  coverImage: {
    large: string;
  };
  averageScore: number | null;
};

export async function fetch_trending_animes(
  page = 1,
  perPage = 20,
): Promise<Anime[]> {
  const query = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: TRENDING_DESC) {
        id
        title {
          english
          romaji
        }
        description(asHtml: false)
        genres
        episodes
        bannerImage
        coverImage {
          large
        }
        averageScore
      }
    }
  }
`;
  const variables = { page, perPage };

  const res = await fetch(anilist_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`AniList API error: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data.Page.media as Anime[];
}
