import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		50: "#fff9db",
		100: "#fdecaf",
		200: "#fadf81",
		300: "#f9d251",
		400: "#f7c522",
		500: "#ddab08",
		600: "#ac8502",
		700: "#7b5f00",
		800: "#4b3900",
		900: "#1c1300",
	},
};

const components = {
	Button: {
		variants: {
			brand: {
				bg: "brand.300",
				color: "black",
				_hover: {
					bg: "brand.500",
				},
				_active: {
					bg: "brand.600",
				},
			},
			black: {
				bg: "gray.900",
				color: "white",
				_hover: {
					bg: "gray.700",
				},
				_active: {
					bg: "gray.800",
				},
			},
			brand_outline: {
				bg: "white",
				color: "black",
				borderWidth: "3px",
				borderColor: "brand.500",
				_hover: {
					bg: "brand.500",
				},
				_active: {
					bg: "brand.600",
				},
			},
		},
	},
};

export const theme = extendTheme({ colors, components });
