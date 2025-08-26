export const typography = {
  title: {
    fontSize: 18,
    fontWeight: "700" as const,
    textTransform: "none" as const,
  },
  mediumTitle: {
    fontSize: 10,
    fontWeight: "600" as const,
    textTransform: "none" as const,
  },
  contentCardTitle: {
    fontSize: 12,
    fontWeight: "600" as const,
    textTransform: "none" as const,
  },
  button: {
    fontSize: 8,
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
  },
  description: {
    fontSize: 8,
    fontWeight: "400" as const,
    textTransform: "none" as const,
  },
};

export type typography = typeof typography;
