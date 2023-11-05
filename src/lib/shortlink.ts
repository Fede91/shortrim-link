export const getPublicShortLinkUrl = (shortLink: string) => {
  return process.env.NEXT_PUBLIC_SHORT_LINK_URL + shortLink;
};
