# ECommerce-API-Platform

Yazılım geliştiricilerin hızlı ve verimli bir şekilde e-ticaret veya envanter yönetimi uygulamaları oluşturmasını sağlayan güçlü ve dokümante edilmiş bir API.

## Teknoloji

| | |
|---|---|
| Mimari | aspnet-core |
| Frontend | React + Vite + Tailwind |
| Backend | ASP.NET Core Web API |
| Veritabani | PostgreSQL |
| Deployment | Docker |

## Kurulum

```bash
cd Backend
dotnet restore
dotnet run
```

## Dosya Yapisi

```
ecommerce-api-platform/
  styles/variables.css
  styles/reset.css
  styles/global.css
  Backend/ECommerceAPI/ECommerceAPI.csproj
  Backend/ECommerceAPI/Program.cs
  Backend/ECommerceAPI/appsettings.json
  Backend/ECommerceAPI/Data/AppDbContext.cs
  Backend/ECommerceAPI/Models/User.cs
  Backend/ECommerceAPI/Models/Product.cs
  Backend/ECommerceAPI/Models/Category.cs
  Backend/ECommerceAPI/Models/Order.cs
  Backend/ECommerceAPI/Models/OrderItem.cs
  Backend/ECommerceAPI/Controllers/AuthController.cs
  Backend/ECommerceAPI/Controllers/ProductsController.cs
  Backend/ECommerceAPI/Controllers/CategoriesController.cs
  Backend/ECommerceAPI/Controllers/OrdersController.cs
  Backend/.dockerignore
  Backend/Dockerfile
  Backend/docker-compose.yml
  Backend/README.md
  Frontend/package.json
  Frontend/index.html
  Frontend/vite.config.js
  Frontend/tailwind.config.js
  Frontend/postcss.config.js
  Frontend/src/main.jsx
  Frontend/src/index.css
  Frontend/src/App.jsx
  Frontend/src/context/AuthContext.jsx
  Frontend/src/components/Header.jsx
  Frontend/src/pages/Home.jsx
  Frontend/src/pages/Login.jsx
  Frontend/src/pages/Register.jsx
  Frontend/src/pages/Products.jsx
  Frontend/src/pages/Categories.jsx
  Frontend/src/pages/Orders.jsx
  Frontend/src/pages/ApiDocs.jsx
  Frontend/.gitignore
  Frontend/README.md
  .gitignore
  .github/workflows/deploy.yml
```

## Uretim Raporu

- uiux: Tamamlandi
- db: Tamamlandi
- backend: Tamamlandi
- frontend: Tamamlandi
- qa: Tamamlandi
- devops: Tamamlandi

---

> Bu proje Kurumsal AI Yazilim Ajansi tarafindan otomatik olarak uretilmistir.
