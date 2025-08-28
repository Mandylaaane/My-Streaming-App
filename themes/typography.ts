export const typography = {
  title: {
    fontFamily: "Alata",
    fontSize: 18,
    fontWeight: "700" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
  },
  mediumTitle: {
    fontFamily: "Alata",
    fontSize: 16,
    fontWeight: "600" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
  },
  navBarText: {
    fontFamily: "Alata",
    fontSize: 12,
    fontWeight: "600" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
  },
  contentCardTitle: {
    fontFamily: "Alata",
    fontSize: 12,
    fontWeight: "600" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
  },
  button: {
    fontFamily: "Alata",
    fontSize: 8,
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    color: "#FFFFFF",
  },
  description: {
    fontFamily: "Alata",
    fontSize: 8,
    fontWeight: "400" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
  },
};

export type typography = typeof typography;
