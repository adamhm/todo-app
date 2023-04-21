import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import sassDts from "vite-plugin-sass-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, ".src/assets/"),
            "@components/index": path.resolve(
                __dirname,
                "./src/components/index.d.ts"
            ),
            "@contexts/theme": path.resolve(
                __dirname,
                "./src/contexts/theme.d.ts"
            ),
            "@typedefs/": path.resolve(__dirname, "./src/types/"),
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
