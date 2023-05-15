import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import sassDts from "vite-plugin-sass-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@state": path.resolve(__dirname, "./src/state"),
            "@typedefs": path.resolve(__dirname, "./src/types"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        },
    },
    plugins: [
        react(),
        Unfonts({
            google: {
                families: [
                    {
                        name: "Josefin Sans",
                        styles: "wght@400;700",
                        defer: true,
                    },
                ],
            },
        }),
        sassDts({
            enabledMode: ["development", "production"],
            sourceDir: path.resolve(__dirname, "./src"),
        }),
    ],
});
