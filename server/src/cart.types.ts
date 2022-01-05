export type Cart = {
  prices: Number[];
  quantities: Number[];
  country: "FR" | "US" | "UK";
  reduction: "STANDARD";
};

export type Invoice = string;
