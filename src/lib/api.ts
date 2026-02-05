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

export async function fetch_anime_by_id(id: number): Promise<Anime> {
  const query = `
    query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        title {
          english
          romaji
        }
        description
        genres
        episodes
        bannerImage
        coverImage {
          large
        }
        averageScore
      }
    }
  `;

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id },
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.errors?.[0]?.message || "Failed to fetch anime");
  }

  return result.data.Media;
}

export async function fetch_sorted_anime(
  sort: string,
  page = 1,
  perPage = 20,
): Promise<Anime[]> {
  const query = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: ${sort}) {
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

export async function search_anime(
  search: string,
  page = 1,
  perPage = 20,
): Promise<Anime[]> {
  const query = `
  query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, search: $search, sort: SEARCH_MATCH) {
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

  const variables = { search, page, perPage };

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
