import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений
  },
  basePath: '', // Оставьте пустым для username.github.io
  // ИЛИ укажите имя репозитория если部署 на username.github.io/repo-name
  // basePath: '/имя-репозитория',
};

export default nextConfig;